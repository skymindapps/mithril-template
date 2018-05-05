import * as m from 'mithril';
import * as t from 'i18n4v';

export interface ITranslateService {
  readonly languages: string[];
  readonly currentLanguage: string;
  setLanguage(lang: string): void;
}

export class TranslateService implements ITranslateService {
  private readonly _loadedLanguages: any;
  public readonly languages: string[];

  private _currentLanguage: string;
  public get currentLanguage(): string {
    return this._currentLanguage;
  }

  constructor(languages: string[]) {
    this.languages = languages.map(x => x);
    this.languages.sort();

    this._loadedLanguages = {};

    t.selectLanguage(languages, ((err, lang: string): void => {
      // If there is no good choice, it returns null.
      if (!lang) {
        lang = 'en';
      }

      this._loadLanguage(lang);
    }) as any as (lang) => void); // hack to handle error in i18nv4.d.ts
  }

  public setLanguage(lang: string): void {
    this._loadLanguage(lang);
  }

  private _loadLanguage(lang: string): void {
    this._currentLanguage = lang;

    if (this._loadedLanguages[lang]) {
      this._addLanguage(lang, this._loadedLanguages[lang]);
    } else {
      m.request('/assets/i18n/' + lang + '.json').then(data => {
        this._loadedLanguages[lang] = data;
        this._addLanguage(lang, this._loadedLanguages[lang]);
      })
      .catch(() => {
        console.log(`Language "${lang}" not recognized.`);
      });
    }
  }

  private _addLanguage(key: string, language: any): void {
    t.setLanguage(key);
    t.translator.add(language);
  }
}