// class
export class Employee {
  firstName: string;
  lastName: string;
  private age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    console.log(`Student ${this.firstName} ${this.lastName} created.`);
  }

  // method definition

  // accessor name(): return type { code }
  public publicMethod(): void {
    console.log('public business');

    // call method
    this.privateMethod();

    this.methodWithParameter(3);
  }

  private privateMethod(): string {
    return 'private message';
  }

  private methodWithParameter(count: number): number {
    return count * 2;
  }

  // getter
  get getAge(): number {
    return this.age;
  }

  // setter
  set addToAge(value: number) {
    this.age = this.age + value;
  }
}
