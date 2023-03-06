import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserAddEditComponent } from './components/user-add-edit/user-add-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    UserAddEditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,

    MatFormFieldModule,
    MatInputModule

  ],
  exports: [
    UserAddEditComponent
  ]
})
export class UserModule { }
