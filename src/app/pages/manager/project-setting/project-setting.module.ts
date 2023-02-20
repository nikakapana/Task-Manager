import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectSettingRoutingModule } from './project-setting-routing.module';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ProjectBoardComponent } from './project-board/project-board.component';
import { IssueTypesComponent } from './issue-types/issue-types.component';
import { ProjectUsersComponent } from './project-users/project-users.component';
import { BoardAddEditComponent } from './board-add-edit/board-add-edit.component';
import {MatButtonModule} from "@angular/material/button";
import { IssueTypeAddEditComponent } from './issue-type-add-edit/issue-type-add-edit.component';


@NgModule({
  declarations: [
    ProjectInfoComponent,
    ProjectBoardComponent,
    IssueTypesComponent,
    ProjectUsersComponent,
    BoardAddEditComponent,
    IssueTypeAddEditComponent
  ],
  imports: [
    CommonModule,
    ProjectSettingRoutingModule,
    MatButtonModule
  ]
})
export class ProjectSettingModule { }
