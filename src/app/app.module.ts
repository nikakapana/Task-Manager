import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainLayoutModule} from "./main-layout/main-layout.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule, RouterOutlet} from "@angular/router";
import {AuthInterceptor} from "./core/interceptors/auth.interceptor";
import {CookieService} from "ngx-cookie-service";
import {ProjectInterceptor} from "./core/interceptors/project.interceptor";
import { ProjectPageComponent } from './pages/manager/project-page/project-page.component';
import { ProjectSettingComponent } from './pages/manager/project-setting/project-setting.component';



@NgModule({
  declarations: [
    AppComponent,
    ProjectPageComponent,
    ProjectSettingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterOutlet

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },{
      provide: HTTP_INTERCEPTORS,
      useClass: ProjectInterceptor,
      multi: true
    },
    CookieService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
