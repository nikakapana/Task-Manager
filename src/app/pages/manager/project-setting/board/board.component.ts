import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Board } from 'src/app/core/interfaces/board';
import { BoardService } from 'src/app/core/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  boards$: Observable<Board[]> = this.boardService.getBoards();
  boardId!: number
  board!: Board

  constructor(
    private boardService: BoardService,
    private route: ActivatedRoute,
  ) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.boardId = +params['id']
        this.getBoard();
      }
    })
  }

  getBoard() {
    this.boardService.getBoard(this.boardId).subscribe(board => {
      console.log(board)
      this.board = board
    })
  }





}
