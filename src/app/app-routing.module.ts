import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { AuthGuard } from "./core/guards/auth.guard";
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivateChild: [AuthGuard],
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },

      {
        path: 'roles',
        loadChildren: () => import('./pages/roles/roles.module').then(m => m.RolesModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./pages/manager/projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'updatePassword',
        component: UpdatePasswordComponent
      },
      {
        path: 'backlog',
        loadComponent: () => import('./pages/backlog/backlog.component').then(m => m.BacklogComponent)
      }

    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
