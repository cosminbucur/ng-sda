export class DemoStrings {

  public templateStrings(): void {
    const multiLineString = `
      this
      is
      a
      multi-line
      string
    `;
    console.log(multiLineString);
  }

  public variableSubstitution(): void {
    const firstName = 'lebron';
    const lastName = 'james';

    const fullName = `This is ${firstName} ${lastName}`;
    console.log(fullName);
  }
}
