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
import { ProjectBoardComponent } from './pages/manager/project-board/project-board.component';



@NgModule({
  declarations: [
    AppComponent,
    ProjectBoardComponent

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
    },
    CookieService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
