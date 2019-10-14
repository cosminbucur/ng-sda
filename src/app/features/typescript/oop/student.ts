import { Person } from './person';

export class Student extends Person {
  course;

  constructor(firstName, lastName, course) {
    super(firstName, lastName);
    this.course = course;
  }

  whoAreYou() {
    return `${super.whoAreYou()} and i'm studying ${this.course}`;
  }
}
