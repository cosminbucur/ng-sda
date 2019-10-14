export class DemoFatArrow {
  public testFatArrow(): void {
    setTimeout(() => {
      'setTimeoutCalled!';
    }, 1000);
  }

  public testFatArrowWithArguments(): void {
    let multiply = function(a, b) {
        return a * b;
    };

    let newMultiply = (a, b) => a * b;
  }
}
