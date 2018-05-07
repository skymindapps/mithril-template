import * as m from 'mithril';
import { Observable, Subject } from 'rxjs';

export interface IRouteService {
  readonly currentUrl: Observable<string>;
  navigate(url: string): void;
}

export class RouteService implements IRouteService {
  private _currentUrl: Subject<string>;
  get currentUrl(): Observable<string> {
    return this._currentUrl.asObservable();
  }

  constructor() {
    this._currentUrl = new Subject<string>();
  }

  navigate(url: string): void {
    m.route.set(url);
    this._currentUrl.next(url);
  }
}