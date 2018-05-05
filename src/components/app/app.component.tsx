import * as m from 'mithril';
import { ClassComponent, Vnode } from 'mithril';
import * as t from 'i18n4v';

import { Inject, DITypes, ITranslateService } from '../../services';
// import { DI, DITypes, ITranslateService } from '../../services';

export interface Attrs {
	name: string;
}

export class AppComponent implements ClassComponent<Attrs> {	

  @Inject(DITypes.TranslationService)
  private _translateService: ITranslateService;

  constructor() {
  }

	view(vnode: Vnode<Attrs, this>) {
		return [<div>
      Hello {t('cat')}
      </div>,
      <div>
        <button onclick={() => this._setlanguage('da')}>Dansk</button>
        <button onclick={() => this._setlanguage('en')}>English</button>
        <button onclick={() => this._setlanguage('xx')}>XXXXXXX</button>
      </div>]
  }
  
  private _setlanguage(lang: string): void {
    this._translateService.setLanguage(lang);
  }
}