import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectSettingRoutingModule } from './project-setting-routing.module';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ProjectBoardComponent } from './project-board/project-board.component';
import { IssueTypesComponent } from './issue-types/issue-types.component';
import { ProjectUsersComponent } from './project-users/project-users.component';
import { BoardAddEditComponent } from './board-add-edit/board-add-edit.component';
import { IssueTypeAddEditComponent } from './issue-type-add-edit/issue-type-add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoardComponent } from './board/board.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ProjectInfoComponent,
    ProjectBoardComponent,
    IssueTypesComponent,
    ProjectUsersComponent,
    BoardAddEditComponent,
    IssueTypeAddEditComponent,
    BoardComponent,
  ],
  imports: [
    CommonModule,
    ProjectSettingRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatDialogModule,

    MatTableModule,

  ]
})
export class ProjectSettingModule { }
