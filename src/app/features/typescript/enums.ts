import { Signal } from './signal';
import { Role } from './role';

export class DemoEnums {

  public iterateEnum(): void {
    console.log('iterate enum: ');

    for (const role in Role) {
      if (isNaN(Number(role))) {
        console.log(role);
      }
    }
  }

  public iterateEnumKeys() {
    console.log('iterate enum keys: ');

    Object.keys(Role)
      .filter(key => !isNaN(Number(Role[key])))
      .forEach(key => console.log(Role[key]));
  }

  public getKeysOfStringEnum(): void {
    console.log('iterate keys of string enum: ');

    Object.keys(Signal).forEach(key => console.log(key));
  }

  public getValuesOfStringEnum(): void {
    console.log('iterate values of string enum: ');

    Object.keys(Signal).map(key => console.log(Signal[key]));
  }
}
