import {
  Injector,
  ItemService,
  TranslateService
} from '../services';

declare var environment: any;

export class TYPES {
  static readonly ItemService = 'ItemService';
  static readonly TranslateService = 'TranslateService';
}

export class InjectorConfig {
  constructor() {
    Injector.register(TYPES.ItemService, new ItemService());
    Injector.register(TYPES.TranslateService, new TranslateService(environment.languages));
  }
}
