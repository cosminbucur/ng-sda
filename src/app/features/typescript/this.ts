export class DemoThis {
  public testThis(): void {
    const greeter = {
      name: 'jon snow',
      sayLater: function() {
        console.log(this); // "this" points to greeter
        setTimeout(() => {
          console.log(this);
          console.log(`${this.name}`); // "this" points to greeter
        }, 1000);
      },
      shortHandFunction() {
        console.log('in short hand function');
      }
    };

    greeter.sayLater();
    greeter.shortHandFunction();
  }
}
