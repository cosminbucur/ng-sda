import { EditUserComponent } from './features/crud/edit-user/edit-user.component';
import { AddUserComponent } from './features/crud/add-user/add-user.component';
import { TypescriptComponent } from './features/typescript/typescript.component';
import { ComponentInteractionComponent } from './features/component-interaction/component-interaction.component';
import { NotificationsComponent } from './features/notifications/notifications.component';
import { HomeComponent } from './features/home/home.component';
import { CustomPipesComponent } from './features/custom-pipes/custom-pipes.component';
import { EventBindingComponent } from './features/event-binding/event-binding.component';
import { BuiltInDirectivesComponent } from './features/built-in-directives/built-in-directives.component';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './features/data-binding/data-binding.component';
import { appRoutesNames } from './app.routes.names';
import { TemplateDrivenComponent } from './features/forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './features/forms/model-driven/model-driven.component';
import { ListUserComponent } from './features/crud/list-user/list-user.component';

export const appRoutes: Routes = [
  { path: appRoutesNames.HOME, component: HomeComponent },
  { path: appRoutesNames.TYPESCRIPT, component: TypescriptComponent },
  { path: appRoutesNames.DATA_BINDING, component: DataBindingComponent },
  { path: appRoutesNames.EVENT_BINDING, component: EventBindingComponent },
  { path: appRoutesNames.BUILT_IN_DIRECTIVES, component: BuiltInDirectivesComponent },
  { path: appRoutesNames.PIPES, component: CustomPipesComponent },
  { path: appRoutesNames.TEMPLATE_DRIVEN_FORMS, component: TemplateDrivenComponent },
  { path: appRoutesNames.MODEL_DRIVEN_FORMS, component: ModelDrivenComponent },
  { path: appRoutesNames.COMPONENT_COMMUNICATION, component: ComponentInteractionComponent },
  { path: appRoutesNames.NOTIFICATIONS, component: NotificationsComponent },
  { path: appRoutesNames.CRUD, component: ListUserComponent },
  { path: appRoutesNames.ADD_USER, component: AddUserComponent },
  { path: appRoutesNames.LIST_USER, component: ListUserComponent },
  { path: appRoutesNames.EDIT_USER, component: EditUserComponent },
  { path: '', pathMatch: 'full', component: AppComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
