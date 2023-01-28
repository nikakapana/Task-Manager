import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {RouterModule, RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class MainLayoutModule { }
