import * as m from 'mithril';
import { Observable, Subject } from 'rxjs';

export interface IRouteService {
  currentUrl: Subject<string>;
  navigate(url: string): void;
}

export class RouteService implements IRouteService {
  readonly currentUrl: Subject<string>;

  constructor() {
    this.currentUrl = new Subject<string>();
  }

  navigate(url: string): void {
    m.route.set(url);
    this.currentUrl.next(url);
  }
}