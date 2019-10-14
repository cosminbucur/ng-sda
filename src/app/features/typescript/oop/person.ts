import { Human } from './human';
export class Person implements Human {
    firstName = '';
    lastName = '';

    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

  // short form
//   constructor(private firstName, private lastName) {}

  name() {
    return `${this.firstName} ${this.lastName}`;
  }

  whoAreYou() {
    return `Hi I'm ${this.name()}`;
  }
}
