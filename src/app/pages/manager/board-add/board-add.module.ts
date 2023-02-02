import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardRoutingModule } from './board-routing.module';
import {BoardAddComponent} from "./board-add.component";


@NgModule({
  declarations: [
    BoardAddComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule
  ]
})
export class BoardAddModule { }
