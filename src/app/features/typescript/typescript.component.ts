import { DemoObjectDestructuring } from './object-destructuring';
import { DemoFatArrow } from './fat-arrow';
import { Component } from '@angular/core';
import { DemoThis } from './this';
import { DemoVariables } from './variables';
import { DemoIteration } from './iteration';
import { DemoMaps } from './maps';
import { DemoSets } from './sets';
import { DemoPromises } from './promises';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent {

  constructor() {
    // const demoVariables: DemoVariables = new DemoVariables();
    // demoVariables.declareVariables();

    // const demoSrings: DemoStrings = new DemoStrings();
    // demoSrings.templateStrings();
    // demoSrings.variableSubstitution();

    // const demoConst: DemoConst = new DemoConst();
    // demoConst.mutateObject();
    // demoConst.makeObjectImmutable();

    // const demoFatArrow: DemoFatArrow = new DemoFatArrow();
    // demoFatArrow.testFatArrow();
    // demoFatArrow.testFatArrowWithArguments();

    // const demoThis: DemoThis = new DemoThis();
    // demoThis.testThis();

    // const demoObjectDestructuring: DemoObjectDestructuring = new DemoObjectDestructuring();
    // demoObjectDestructuring.objectDestructuring();
    // demoObjectDestructuring.arrayDestructuring();
    // demoObjectDestructuring.functionWithMultipleParameters();
    // demoObjectDestructuring.destructuredFunctionWithParameters();
    // demoObjectDestructuring.destructuredFunctionWithDefaultParameters();

    // const demoIteration: DemoIteration = new DemoIteration();
    // demoIteration.testFor();
    // demoIteration.testForInObject();
    // demoIteration.testForInArray();
    // demoIteration.testForOf();

    // const demoMaps: DemoMaps = new DemoMaps();
    // demoMaps.testMap();

    // const demoSets: DemoSets = new DemoSets();
    // demoSets.testSets();

    // const demoEnums: DemoEnums = new DemoEnums();
    // demoEnums.iterateEnum();
    // demoEnums.iterateEnumKeys();
    // demoEnums.getKeysOfStringEnum();
    // demoEnums.getValuesOfStringEnum();

    const demoPromises: DemoPromises = new DemoPromises();
    demoPromises.testSuccessPromise();
    demoPromises.testErrorPromise();
    demoPromises.promiseChainability();
    demoPromises.promiseErrorHandling();
    demoPromises.promiseInTypescript();
  }
}
