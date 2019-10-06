import { CustomPipesComponent } from './features/custom-pipes/custom-pipes.component';
import { ZeroPaddingPipe } from './shared/pipes/zero-padding.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { TypescriptComponent } from './features/typescript/typescript.component';
import { DataBindingComponent } from './features/data-binding/data-binding.component';
import { appRouting } from './app.routes';
import { BuiltInDirectivesComponent } from './features/built-in-directives/built-in-directives.component';
import { EventBindingComponent } from './features/event-binding/event-binding.component';
import { HomeComponent } from './features/home/home.component';
import { TemplateDrivenComponent } from './features/forms/template-driven/template-driven.component';
import { SharedModule } from './shared/shared.module';
import { ModelDrivenComponent } from './features/forms/model-driven/model-driven.component';
import { NotificationsComponent } from './features/notifications/notifications.component';
import { CoreModule } from './core/core.module';
import { ComponentInteractionComponent } from './features/component-interaction/component-interaction.component';
import { ParentComponent } from './features/component-interaction/parent/parent.component';
import { ChildComponent } from './features/component-interaction/parent/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent,
    HomeComponent,
    DataBindingComponent,
    BuiltInDirectivesComponent,
    EventBindingComponent,
    CustomPipesComponent,
    ZeroPaddingPipe,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    NotificationsComponent,
    ComponentInteractionComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [CoreModule, SharedModule, appRouting],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
