import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from 'src/app/core/interfaces/board';
import { BoardService } from 'src/app/core/services/board.service';

@Component({
  selector: 'app-project-board',
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss']
})
export class ProjectBoardComponent {

  boards$: Observable<Board[]> = this.boardService.getBoards();
  displayedColumns = ['id', 'name', 'description', 'position', 'createdAt'];

  constructor(
    private boardService: BoardService,
  ) {
  }

  addBoard() {
    console.log('add board');
  }

}
