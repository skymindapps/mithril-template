import * as m from 'mithril';

export interface IRouteService {
  navigate(url: string): void;
}

export class RouteService {
  navigate(url: string): void {
    m.route.set(url);
  }
}