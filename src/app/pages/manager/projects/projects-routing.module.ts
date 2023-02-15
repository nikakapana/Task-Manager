import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from "./projects.component";
import { ProjectAddEditComponent } from "../project-add-edit/project-add-edit.component";
import { ProjectPageComponent } from '../project-page/project-page.component';

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
    path:'project',
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
