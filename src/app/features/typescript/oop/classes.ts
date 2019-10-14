import { Student } from './student';
import { Person } from './person';
export class DemoClasses {
  public classInstance() {
    let jon = new Person('jon', 'snow');
    console.log(jon.whoAreYou());

    let danny = new Student('daenerys', 'targarien', 'Angular 8');
    console.log(danny.whoAreYou());
  }
}
