import { ApiService } from './../../core/services/api-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [ListUserComponent, AddUserComponent, EditUserComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [ApiService]
})
export class CrudModule { }
