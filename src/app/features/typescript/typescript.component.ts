import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent {
  // string
  name = 'Paul';

  // number
  age = 36;

  // boolean
  married = true;

  // array
  itCompanies: Array<string> = ['IBM', 'Microsoft', 'Google'];
  brands: string[] = ['Apple', 'Dell', 'HP'];

  constructor() {
    this.iterateEnum();

    this.iterateEnumKeys();

    this.getKeysOfStringEnum();

    this.getValuesOfStringEnum();
  }

  // enums
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
