export class DemoPromises {
  public testSuccessPromise(): void {
    const promise = new Promise((resolve, reject) => {
      resolve(123);
    });
    promise.then(res => {
      console.log('I get called: ', res === 123);
    });
    promise.catch(err => {
      // this is never called
    });
  }

  public testErrorPromise(): void {
    const promise = new Promise((resolve, reject) => {
      reject(new Error('Something awful happened'));
    });
    promise.then(res => {
      // this is never called
    });
    promise.catch(err => {
      console.log('I get called: ', err.message);
    });
  }

  public promiseChainability(): void {
    Promise.resolve(123)
      .then(res => {
        console.log(res); // 123
        return 456;
      })
      .then(res => {
        console.log(res); // 456
        return Promise.resolve(123);
      })
      .then(res => {
        console.log(res); // 123
        return 123;
      });
  }

  public promiseErrorHandling(): void {
    Promise.reject(new Error('something bad happened'))
      .then(res => {
        console.log(res); // not called
        return 456;
      })
      .then(res => {
        console.log(res); // not called
        return 123;
      })
      .then(res => {
        console.log(res); // not called
        return 123;
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  public catchCreatePromise(): void {
    Promise.reject(new Error('something bad happened'))
      .then(res => {
        console.log(res); // not called
        return 456;
      })
      .catch(err => {
        console.log(err.message); // something bad happened
        return 123;
      })
      .then(res => {
        console.log(res); // 123
      });
  }

  public promiseInTypescript(): void {
    Promise.resolve(123)
      .then(res => {
        // res is inferred to be of type `number`
        console.log('type of res = ' + typeof res);
        return true;
      })
      .then(res => {
        // res is inferred to be of type `boolean`
        console.log('type of res = ' + typeof res);
      });
  }
}
