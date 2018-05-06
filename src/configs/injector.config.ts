import {
  Injector,
  ItemService,
  RouteService,
  TranslateService
} from '../services';

declare var environment: any;

export class TYPES {
  static readonly ItemService = 'ItemService';
  static readonly RouteService = 'RouteService';
  static readonly TranslateService = 'TranslateService';
}

export class InjectorConfig {
  constructor() {
    Injector.register(TYPES.ItemService, new ItemService());
    Injector.register(TYPES.RouteService, new RouteService());
    Injector.register(TYPES.TranslateService, new TranslateService(environment.languages));
  }
}
