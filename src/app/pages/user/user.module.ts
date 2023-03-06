import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserAddEditComponent } from './components/user-add-edit/user-add-edit.component';


@NgModule({
  declarations: [
    UserAddEditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,

  ],
  exports: [
    UserAddEditComponent
  ]
})
export class UserModule { }
