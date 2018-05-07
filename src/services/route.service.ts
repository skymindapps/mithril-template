import * as m from 'mithril';
import { Observable, Subject } from 'rxjs';

export interface IRouteService {
  readonly currentUrl: Observable<string>;
  getCurrentUrl(): string;
  navigate(url: string): void;
}

export class RouteService implements IRouteService {
  private _currentUrl: Subject<string>;
  get currentUrl(): Observable<string> {
    return this._currentUrl.asObservable();
  }

  constructor() {
    this._currentUrl = new Subject<string>();
    this._currentUrl.next(m.route.get());
  }

  getCurrentUrl(): string {
    return m.route.get();
  }

  navigate(url: string): void {
    m.route.set(url);
    this._currentUrl.next(url);
  }
}