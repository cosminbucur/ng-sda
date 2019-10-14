export class DemoIteration {

    // ES5
  public testFor(): void {
    let array = [1, 2, 3];
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

  public testForInObject(): void {
    var myObject = { a: 1, b: 2 };
    for (let property in myObject) {
      console.log(property);
    }
  }

  public testForInArray(): void {
    var myArray = [10, 20, 30];
    for (let index in myArray) {
      console.log(index + '-' + typeof(index));
    }
  }

  // ES6
  public testForOf(): void {
    const myArray = [10, 20, 30];
    for (const value of myArray) {
      console.log(value + '-' + typeof(value));
    }
  }
}
