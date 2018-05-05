import { Injector } from './injector';
import { TranslateService } from './translate.service';

declare var environment: any;

export class InjectorConfig {
  private _lazyServices: any = {};

  constructor() {
    Injector.register(DITypes.TranslationService, this._translateService);
  }

  private get _translateService(): TranslateService {
    return this._lazyServices[DITypes.TranslationService] || (this._lazyServices[DITypes.TranslationService] = new TranslateService(environment.languages));
  }
}

export class DITypes {
  static readonly TranslationService = 'TranslationService';
}