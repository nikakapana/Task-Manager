import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles/roles.component';
import {FormsModule} from "@angular/forms";
import { PermissionAddEditComponent } from './permission-add-edit/permission-add-edit.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    RolesComponent,
    PermissionAddEditComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class RolesModule { }
