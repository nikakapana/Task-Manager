import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from "./projects.component";
import { ProjectAddEditComponent } from "../project-add-edit/project-add-edit.component";
import { ProjectBoardComponent } from '../project-board/project-board.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: 'create',
    component: ProjectAddEditComponent
  },
  {
    path: 'edit/:id',
    component: ProjectAddEditComponent
  },
  {
    path: 'board/:id',
    component: ProjectBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
