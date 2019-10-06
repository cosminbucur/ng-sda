import { Signup } from './../../../shared/models/signup.model';
import { Component, OnInit, ViewChild } from '@angular/core';

// the template form is associated with an instance of the NgForm directive
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  email: string;  // container for input on the component

  model: Signup = new Signup();   // container for domain model

  @ViewChild('#f', {static: false}) form: any;    // reference to the ngForm instance

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('form submitted');
      this.form.reset();
    }
  }
}
