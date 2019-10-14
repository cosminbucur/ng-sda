import { Observable, interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { take, map, filter } from 'rxjs/internal/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    interval(1000)
      .pipe(
        take(3),
        map(v => Date.now())
      )
      .subscribe(value => console.log('Subscriber: ' + value));
  }

 
}
