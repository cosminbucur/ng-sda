import { Language } from './../../../shared/models/language.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit {

  public languages: Language[] = [
    {value: 'ro', viewValue: 'Romanian'},
    {value: 'en', viewValue: 'English'},
    {value: 'ge', viewValue: 'German'}
  ];

  public registrationForm: FormGroup;

  ngOnInit() {
    this.registrationForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
      }),
      email: new FormControl(),
      password: new FormControl(),
      language: new FormControl()
    });
  }

  public onSubmit(): void {
    console.log('sumbit');
  }

  public cancel(): void {
    console.log('cancel');
  }
}
