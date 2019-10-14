# ng-sda

## 1. Setup environment

### node

asynchronous event-driven JavaScript runtime

<https://nodejs.org/en/download/>

### npm

package manager (bundled with node)

search dependencies at <https://www.npmjs.com/>

### angular-cli

tool for scaffolding Angular apps

> `npm install -g @angular/cli`
> `node -v`

### vscode

ide for angular

<https://code.visualstudio.com/download>

1. add extensions

- TSLint
- Auto Import
- Debugger for Chrome / Mozilla
- Path Intellisense
- npm
- GitLens
- Angular 8 snippets
- Material Icon Theme
- Todo Tree
- Todo Highlight

2. configure vscode

  - File > Preferences > Settings
    > Files: Auto Save = *onFocusChange*

3. shortcuts

  find text in project: `CTRL + SHIFT + F`
  find text in file:    `CTRL + F`
  find file in project: `CTRL + P`
  intellisense:         `CTRL + .`
  
  open terminal:        `CTRL + ~`
  start server:         `ng serve`
  stop server:          `CTRL + C` > yes
  
### postman

create HTTP requests (simulate browser behavior)

<https://www.getpostman.com/downloads/>

### augury

chrome extension for angular apps

<https://augury.rangle.io/>

## 2. Typescript

__objective__: use all typescript features

1. create angular app

  `ng new ng-sda-course --style=scss` (no routing)

2. add component
   
  > new folder src/app/__features__
  > cd src/app/features
  > `ng g c typescript`

- EC6

- let
- const
- variables
- template strings
- fat arrow
- destructuring
- iteration
- maps
- sets
- oop
- enums
- promises
- modules
  
## 3. Angular

### folder structure

 __core__
  services
    user.service.ts

features
  component

__shared__
  __material__
  models
    *user.model.ts*

  pipes

assets
  img

environments
  *environment.ts*
  *environment.map.ts*

*app.routes.names.ts*
*app.routes.ts*

*index.html*

*angular.json*

*package.json*

### modules

__objective__: learn how to write a module

- declarations
- imports
- exports
- providers

__objective__: setup a scalable folder structure using angular CLI

1. add features

  > new folder: src/app/__features__
  
2. configure core module

  > cd src/app
  > `ng g m core`

  > in src/app/core/*core.module.ts*

  ```typescript
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
  ```

  > add to class

  ```typescript
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
  ```

2. configure shared module

  > cd src/app
  > `ng g m shared`
  > add to decorator

  ```typescript
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ]
  ```

### architecting with components

__objective__: learn to split an application in components

### templates and styles

__objective__: learn how template and styles are kept separate from the typescript code

### data binding

__objective__: learn to bind the html to typescript

- one way binding
  - string interpolation  {{ }}
  - property binding       [ ]
  - event binding          ( )

  > cd src/app/features
  > `ng g c data-binding`

  > cd src/app/features
  > `ng g c event-binding`

- two way binding (forms) [( )]
  
### directives

__objective__: use built-in directives

- built-in directives

  > cd src/app/features
  > `ng g c built-in-directives`

  - structural
    - *ngIf
    - *ngSwitch
    - *ngFor

  - attribute
    - ngClass
    - ngSyle
  
- custom directives

  > cd src/app/features
  > `ng g c custom-directives`

### reactive programming with rxjs

- observables - a new primitive type which acts as a blueprint for how we want to create streams, subscribe to them, react to new values, and combine streams together to build new ones
  
  > cd src/app/features
  > `ng g c observables`

- RxJs - *R*eactive E*x*tensions for *J*ava*S*cript, and its a library that gives us an implementation of Observables for JavaScript.

- operators
<http://reactivex.io/documentation/operators.html>

### pipes

__objective__: learn to create custom pipes

1. add pipe

  > new folder: src/app/shared/__pipes__
  > `ng g p zero-padding`

2. use pipe

  > cd src/app/shared/pipes
  > `ng g c custom-pipes`

### forms

__objective__: learn to create and validate template and model driven forms

1. enable forms in project

  > in src/app/shared/*shared.module.ts*

  ```typescript
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';

  imports [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
  ```

2. add components
   
  > new folder: src/app/features/__forms__

- template driven
  > `ng g c template-driven`

- model driven (reactive)
  > `ng g c model-driven`

### component communication

__objective__: learn how component communicate

  > cd src/app/features
  > `ng g c component-interaction`
  > cd src/app/features/component-interaction
  > `ng g c parent`
  > cd src/app/features/component-interaction/parent
  > `ng g c child`

### notifications

__objective__: display notifications to user

1. enable notifications in project

  > `npm install ngx-toastr`

  > in src/app/core/*core.module.ts*
  
  ```typescript
  imports [
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true
    })
  ]
  ```

2. add component

  > cd src/app/features
  > `ng g c notifications`

  > use in component

  ```typescript
  import { ToastrService } from 'ngx-toastr';

  constructor(private toastr: ToastrService) { }

  public clickSuccess(): void {
    this.toastr.success('This is a successful operation', 'Success');
  }
  ```

### http

1. core

  > in src/app/core/*core.module.ts*
  
  ```typescript
  import { HttpClientModule } from '@angular/common/http';

  imports: [
    HttpClientModule
  ]
  ```

2. with promises
   

3. with observables
   

4. mocking with json server

  > `npm install -g json-server`

  - create mocks\mocks.json

  - start mock server

  > `json-server --watch mocks\mocks.json`

  - check server (in postman / browser)
  <http://localhost:3000>

  - find resources
  <http://localhost:3000/users>

  > create postman collection
  
    ```
    create        POST    /users
    find all      GET     /users
    find by id    GET     /users/{id}
    update        PUT     /users/{id}
    delete        DELETE  /users/{id}
    ```

### routing

__objective__: enable routing in the application

1. define routes

  > new file: src/app/*app.routes.ts*

  ```typescript
  export const appRoutes: Routes = [
      { path: appRoutesNames.TYPESCRIPT, component: TypescriptComponent },
      { path: '', pathMatch: 'full', component: AppComponent }
  ];

  export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
  ```

__objective__: extract route names in a file for easy rename

1. define route names

  > new file: src/app/*app.routes.names.ts*

  ```typescript
  export const appRoutesNames = {
      TYPESCRIPT: 'typescript'
  };
  ```

### environment

__objective__: define reusable properties

1. in folder __environment__

  > new file: environment/*environment.map.ts*

  ```typescript
  export interface EnvironmentMap {
    production: boolean;
    serverApiUrl: string;
  }
  ```

2. in __environment.ts__

  > change type of environment to EnvironmentMap

### material

__objective__: learn to add a css framework to the project 

1. add material to project
   
  > `npm install @angular/material

2. setup a theme

  > in src/*styles.scss*

  ```typescript
  @import '@angular/material/prebuilt-themes/deeppurple-amber.css';
  ```

  other themes:

  ```text
    deeppurple-amber.css
    indigo-pink.css
    pink-bluegrey.css
    purple-green.css
  ```

3. create a material module

  > cd src/app/shared
  > `ng g m material`

  > in src/app/shared/*material.model.ts*
  > add modules from
  <https://material.angular.io/components/categories>

  > in src/app/shared/*shared.module.ts*
  
  ```typescript
  imports: [
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
  ```

4. enable material icons and fonts

  > in *index.html*
  > add in head

  ```html
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
  ```

  search icons at <https://material.io/resources/icons/?icon=info&style=baseline>

5. enable animations

  > `npm install hammerjs`
  > in *polyfills.ts* add
  
  ```typescript
  import 'hammerjs'
  ```

6. UX

__objective__: learn material design concepts
  
  > read <https://material.io/design/>

### drag and drop

  > `npm install @angular/cdk`

## 4. CRUD

__objective__: putting it all together

  > cd src/app/features
  > `ng g c crud`
  > cd src/app/features
  > `ng g c list-user`
  > `ng g c add-user`
