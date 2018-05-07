import * as m from 'mithril';
import { ClassComponent, Vnode } from 'mithril';
import * as t from 'i18n4v';
import { Inject, IRouteService } from '../../services';
import { RouteConfig, RouteConfigDefault } from '../../configs/route.config';
import { TYPES } from '../../configs/injector.config';
import { Subscription } from 'rxjs';

interface Attrs {
	name: string;
}

export class AppComponent implements ClassComponent<Attrs> {	
  @Inject(TYPES.RouteService)
  private _routeService: IRouteService;

  private _routeSubscription: Subscription;
  private _activeMenu: string;

	view(vnode: Vnode<Attrs, this>): any {
		return (
      <div class="app">
        <div>
          {t('app.hello')} {vnode.attrs.name}
        </div>
        <div class="navbar">
          <ul>
          <li className={this._activeMenu === 'items' ? 'active' : ''}><a href="javascript:void(0)" onclick={() => this._navigate('/items')}>{t('app.nav.items')}</a></li>
          <li className={this._activeMenu === 'profile' ? 'active' : ''}><a href="javascript:void(0)" onclick={() => this._navigate('/profile')}>{t('app.nav.profile')}</a></li>
          </ul>
        </div>
        <div class="main-stage"/>
      </div>);
  }

  oncreate(vnode: Vnode<Attrs, this>) {
    const mainStage = document.querySelector('.main-stage') as Element;
    m.route(mainStage, RouteConfigDefault, RouteConfig);

    this._setActiveMenu(this._routeService.getCurrentUrl());
    this._routeSubscription = this._routeService.currentUrl.subscribe(next => {
      this._setActiveMenu(next);
    });
  }

  onremove(): void {
    if (this._routeSubscription && !this._routeSubscription.closed) {
      this._routeSubscription.unsubscribe();
    }
  }

  private _navigate(url: string): void {
    this._routeService.navigate(url);
  }

  private _setActiveMenu(url: string): void {
    if (url.toLowerCase().startsWith('/profile')) {
      this._activeMenu = 'profile';
    } else {
      this._activeMenu = 'items';
    }
  }
}