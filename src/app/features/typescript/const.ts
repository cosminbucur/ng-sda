export class DemoConst {

    // create variable with local scope
    public testConst(): void {
        const treshold = 2;     // immutable

        // const range;    // syntax error

        // treshold = 3;    // type error
    }

    public mutateObject(): void {
        const myReference = { };

        myReference['myProperty'] = 'hello';
        console.log(myReference);
    }

    public makeObjectImmutable(): void {
        const immutableObject = Object.freeze({immutableProperty: 2});
        // immutableObject.newProperty = 123;    // compile error
        // immutableObject.immutableProperty = 2;   // compile error
        console.log(immutableObject);
    }
}
