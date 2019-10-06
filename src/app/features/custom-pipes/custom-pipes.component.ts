import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss']
})
export class CustomPipesComponent implements OnInit {

  public myNumber = 2;
  public message = 'angular is easy!';

  constructor() { }

  ngOnInit() {
  }

}
