import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-core',
  templateUrl: './http-core.component.html',
  styleUrls: ['./http-core.component.scss']
})
export class HttpCoreComponent {

  apiRoot = 'http://httpbin.org';

  constructor(private http: HttpClient) { }

  doGET() {
    console.log('GET');
    const url = `${this.apiRoot}/get`;
    const params = new HttpParams()
    .set('param1', 'value1')
    .set('param2', 'value2');
    this.http.get(url)
      .subscribe(res => console.log(res));
  }

  doPOST() {
    console.log('POST');
    const url = `${this.apiRoot}/post`;
    const params = new HttpParams()
      .set('param1', 'value1')
      .set('param2', 'value2');
    this.http.post(url, { payload1: 'body1', payload2: 'body2' }, { params }).subscribe(res => console.log(res));
  }

  doPUT() {
    console.log('PUT');
    const url = `${this.apiRoot}/put`;
    const params = new HttpParams()
      .set('param1', 'value1')
      .set('param2', 'value2');
    this.http.put(url, { payload1: 'body1', payload2: 'body2' }, { params }).subscribe(res => console.log(res));
  }

  doDELETE() {
    console.log('DELETE');
    const url = `${this.apiRoot}/delete`;
    const params = new HttpParams()
      .set('param1', 'value1')
      .set('param2', 'value2');
    this.http.delete(url, { params }).subscribe(res => console.log(res));
  }

  doGETAsPromise() {
    console.log('GET AS PROMISE');
    const url = `${this.apiRoot}/get`;
    this.http.get(url)
      .toPromise()
      .then(res => console.log(res));
  }

  doGETAsPromiseError() {
    console.log('GET AS PROMISE ERROR');
    const url = `${this.apiRoot}/post`;
    this.http.get(url)
      .toPromise()
      .then(
        res => console.log(res),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

  doGETAsObservableError() {
    console.log('GET AS OBSERVABLE ERROR');
    const url = `${this.apiRoot}/post`;
    this.http.get(url).subscribe(
      res => console.log(res),
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }

  doGETWithHeaders() {
    console.log('GET WITH HEADERS');
    const headers: Headers = new Headers();
    headers.append('Authorization', btoa('username:password'));
    const requestOptions = {
      params: new HttpParams()
    };
    requestOptions.params.set('param1', 'value1');
    const url = `${this.apiRoot}/get`;
    this.http.get(url, requestOptions).subscribe(
      res => console.log(res),
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }

}
