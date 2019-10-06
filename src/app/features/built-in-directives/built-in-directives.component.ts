import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.scss']
})
export class BuiltInDirectivesComponent implements OnInit {
  people: any[] = [
    {
      name: 'Douglas  Pace',
      age: 35,
      country: 'MARS'
    },
    {
      name: 'Mcleod  Mueller',
      age: 32,
      country: 'USA'
    },
    {
      name: 'Day  Meyers',
      age: 21,
      country: 'HK'
    },
    {
      name: 'Aguirre  Ellis',
      age: 34,
      country: 'UK'
    },
    {
      name: 'Cook  Tyson',
      age: 32,
      country: 'USA'
    }
  ];

  peopleByCountry: any[] = [
    {
      country: 'UK',
      people: [
        {
          name: 'Douglas  Pace'
        },
        {
          name: 'Mcleod  Mueller'
        }
      ]
    },
    {
      country: 'US',
      people: [
        {
          name: 'Day  Meyers'
        },
        {
          name: 'Aguirre  Ellis'
        },
        {
          name: 'Cook  Tyson'
        }
      ]
    }
  ];

  peopleWithoutColor: any[] = [
    {
      name: 'Douglas  Pace',
      country: 'UK'
    },
    {
      name: 'Mcleod  Mueller',
      country: 'USA'
    },
    {
      name: 'Day  Meyers',
      country: 'HK'
    },
    {
      name: 'Aguirre  Ellis',
      country: 'UK'
    },
    {
      name: 'Cook  Tyson',
      country: 'USA'
    }
  ];

  constructor() {}

  ngOnInit() {}

  getColor(country) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }
}
