import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from 'src/app/core/interfaces/board';
import { BoardService } from 'src/app/core/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  boards$: Observable<Board[]> = this.boardService.getBoards();
  constructor(
    private boardService: BoardService,
  ) {

  }





}
