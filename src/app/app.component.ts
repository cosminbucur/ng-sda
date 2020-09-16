import { appRoutesNames } from './app.routes.names';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'ng-sda';
  public appRoutesNames;

  constructor() {
    this.appRoutesNames = appRoutesNames;
  }

}
