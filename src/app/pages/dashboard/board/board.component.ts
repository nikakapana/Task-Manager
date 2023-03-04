import {Component, OnInit} from '@angular/core';
import {BoardService} from "../../../core/services/board.service";
import {ActivatedRoute} from "@angular/router";
import {Board} from "../../../core/interfaces/board";
import {TaskService} from "../../../core/services/task.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boardId!: number;
  board: Board = {} as Board;
  constructor(
     private boardService: BoardService,
     private route: ActivatedRoute,
     public dialog: MatDialog,
     private taskService: TaskService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.boardId = +params['id']
        this.getBoard()
      }
    })
  }


  getBoard() {
    this.boardService.getBoard(this.boardId).subscribe(board => {
      console.log(board)
      this.board = board
      this.taskService.getTasks()
    })
  }
  columns = [    { title: 'To Do', tasks: [] },
    { title: 'In Progress', tasks: [] },
    { title: 'Done', tasks: [] }
  ];


  addTask() {

  }
}
