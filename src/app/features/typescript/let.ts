export class DemoLet {

    // create variable with local scope
    public testLocalVariables() {
        let numberArray: number[] = [];

        for (let i = 0; i < 5; i += 1) {
            numberArray.push(i);
        }

        numberArray.forEach(element => console.log(element));
    }
}
