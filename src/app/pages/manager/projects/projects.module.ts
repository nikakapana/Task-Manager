import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import {ProjectAddEditComponent} from "../project-add-edit/project-add-edit.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectAddEditComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProjectsModule { }
