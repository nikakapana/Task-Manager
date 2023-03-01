import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectAddEditComponent } from "../project-add-edit/project-add-edit.component";
import { ReactiveFormsModule } from "@angular/forms";
import {MatLegacySnackBarModule as MatSnackBarModule} from "@angular/material/legacy-snack-bar";


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectAddEditComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class ProjectsModule { }
