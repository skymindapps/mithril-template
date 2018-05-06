import * as m from 'mithril';
import { ClassComponent, Vnode } from 'mithril';
import * as t from 'i18n4v';
import { Inject } from '../../services';
import { RouteConfig, RouteConfigDefault } from '../../configs/route.config';

interface Attrs {
	name: string;
}

export class AppComponent implements ClassComponent<Attrs> {	

	view(vnode: Vnode<Attrs, this>): any {
		return (
      <div class="app">
        <div>
          {t('app.hello')} {vnode.attrs.name}
        </div>
        <div class="navbar">
          <ul>
          <li><a href="#!/items">{t('app.nav.items')}</a></li>
          <li><a href="#!/profile">{t('app.nav.profile')}</a></li>
          </ul>
        </div>
        <div class="main-stage"/>
      </div>);
  }

  oncreate(vnode: Vnode<Attrs, this>) {
    const mainStage = document.querySelector('.main-stage') as Element;
    m.route(mainStage, RouteConfigDefault, RouteConfig);
  }
}