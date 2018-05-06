import * as m from 'mithril';
import { ClassComponent, Vnode } from 'mithril';
import * as t from 'i18n4v';
import { Inject,  ITranslateService } from '../../services';
import { TYPES } from '../../configs/injector.config';

export class ProfileComponent implements ClassComponent {

  @Inject(TYPES.TranslateService)
  private _translateService: ITranslateService;

  view(vnode: Vnode) {
    return (
      <div class="profile">
        <label>
          <span>{t('profile.selectLanguage')}:</span>
          {
            this._translateService.languages.map(lang => {
              return <button onclick={() => this._translateService.setLanguage(lang)}>{t(`profile.language.${lang}`)}</button>
            })
          }
        </label>
      </div>
    );
  }
}