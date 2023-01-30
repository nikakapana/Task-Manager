import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainLayoutModule} from "./main-layout/main-layout.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
