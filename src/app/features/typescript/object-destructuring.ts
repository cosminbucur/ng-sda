export class DemoObjectDestructuring {
  public objectDestructuring(): void {
    const jon = {
      firstName: 'Jon',
      lastName: 'Snow',
      age: 35
    };

    // before ES6
    const firstName = jon.firstName;
    console.log(firstName);

    // after ES6
    const {
      firstName: destructedFirstName,
      lastName: destructedLastName
    } = jon;
    // extract the property firstName and store it in another variable
    console.log(destructedLastName);
  }

  public arrayDestructuring(): void {
    const myArray = ['first', 'second'];
    const [x, y] = myArray;
    console.log(x); // first
    console.log(y); // second
  }

  // pass multiple parameters in a function using an object
  public functionWithMultipleParameters() {
    function typicalFunction(options) {
      console.log(options.x);
    }
    typicalFunction({ x: 1 }); // 1
  }

  public destructuredFunctionWithParameters(): void {
    function destructuredFunction1({ y }) {
      console.log(y);
    }
    destructuredFunction1({ y: 1 });
  }

  public destructuredFunctionWithDefaultParameters(): void {
    function destructuredFunction2({ defaultValue = 3 }) {
      console.log(defaultValue);
    }
    destructuredFunction2({});
  }
}
