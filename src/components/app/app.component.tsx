import * as m from 'mithril';
import { ClassComponent, Vnode } from 'mithril';
import * as t from 'i18n4v';
import { Inject, IRouteService } from '../../services';
import { RouteConfig, RouteConfigDefault } from '../../configs/route.config';
import { TYPES } from '../../configs/injector.config';

interface Attrs {
	name: string;
}

export class AppComponent implements ClassComponent<Attrs> {	

  @Inject(TYPES.RouteService)
  private _routeService: IRouteService;

	view(vnode: Vnode<Attrs, this>): any {
		return (
      <div class="app">
        <div>
          {t('app.hello')} {vnode.attrs.name}
        </div>
        <div class="navbar">
          <ul>
          <li><a href="javascript:void(0)" click={() => this._navigate('/items')}>{t('app.nav.items')}</a></li>
          <li><a href="javascript:void(0)" click={() => this._navigate('/profile')}>{t('app.nav.profile')}</a></li>
          </ul>
        </div>
        <div class="main-stage"/>
      </div>);
  }

  oncreate(vnode: Vnode<Attrs, this>) {
    const mainStage = document.querySelector('.main-stage') as Element;
    m.route(mainStage, RouteConfigDefault, RouteConfig);
  }

  private _navigate(url: string): void {
    this._routeService.navigate(url);
  }
}