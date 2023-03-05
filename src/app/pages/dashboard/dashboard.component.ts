import { Component } from '@angular/core';
import {BoardService} from "../../core/services/board.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  boards$ = this.boardService.getBoards();
  boardId: number | null = null;
  constructor(
    private boardService: BoardService
  ) {}





}
