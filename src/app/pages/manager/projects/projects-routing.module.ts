import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from "./projects.component";
import { ProjectPageComponent } from '../project-page/project-page.component';
import {EpicAddEditComponent} from "../epic-add-edit/epic-add-edit.component";


const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: 'create',
    component: EpicAddEditComponent
  },
  {
    path: 'edit/:id',
    component: EpicAddEditComponent
  },

  {
    path: 'project',
    component: ProjectPageComponent
  },

  {
    path: 'setting',
    loadChildren: () => import('../project-setting/project-setting.module').then(m => m.ProjectSettingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
