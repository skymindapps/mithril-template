// See https://source.coveo.com/2016/02/04/typescript-injection-decorator/
export class Injector {

  private static _registry: {[key: string]: any} = {};

  static getRegistered(key: string): any {
    var registered = Injector._registry[key];
    if (registered) {
      return registered;
    } else {
      throw new Error(`Error: ${key} was not registered.`);
    }
  }

  static register(key: string, value: any) {
    var registered = Injector._registry[key];
    if (registered) {
      throw new Error(`Error: ${key} is already registered.`);
    }
    Injector._registry[key] = value;
  }
}

export function Inject(...keys: string[]) {
  return (target: any, property: string) => {
    target[property] = Injector.getRegistered(keys[0]);
  };
}
