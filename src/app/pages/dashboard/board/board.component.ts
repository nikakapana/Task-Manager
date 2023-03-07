import {Component, Inject, OnInit} from '@angular/core';
import {BoardService} from "../../../core/services/board.service";
import {ActivatedRoute} from "@angular/router";
import {Board, Column} from "../../../core/interfaces/board";
import {TaskService} from "../../../core/services/task.service";
import {MatDialog} from "@angular/material/dialog";
import {TaskAddEditComponent} from "../task-add-edit/task-add-edit.component";
import * as _ from 'lodash';
import {Tasks} from "../../../core/interfaces/task";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {Observable} from "rxjs";
import {User} from "../../../core/interfaces";
import {ProjectsService} from "../../../core/services/projects.service";
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],

})



export class BoardComponent implements OnInit {
  users$: Observable<User[]> = this.projectsService.getProjectUsers()

  tasks: any = {}

  dialogData: any;

  boardId!: number;
  board: Board = {} as Board;
  constructor(
     private boardService: BoardService,
     private route: ActivatedRoute,
     public dialog: MatDialog,
     private taskService: TaskService,
     private projectsService: ProjectsService,


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

  drop(event: CdkDragDrop<any>, column: Column) {
    console.log(event.container)

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      const tasks: Tasks[] = event.container.data.map((task: Tasks, index: number) => {
        return {
          ...task,
          taskStatus: column.taskStatus,
          boardColumnId: column.id,
        }
      })

      this.tasks[column.id] = tasks
      const currentTask = tasks[event.currentIndex]
      console.log(currentTask)
      this.taskService.updateTask(currentTask.id, currentTask).subscribe(task => {

        this.getTasks()
      })
    }


  }

  getBoard() {
    this.boardService.getBoard(this.boardId).subscribe(board => {
      console.log(board)
      this.board = board
      this.getTasks()
    })
  }




  addTask(column: Column) {

    const  dialogRef =  this.dialog.open(TaskAddEditComponent, {
      width: '600px',
      data: {
        boardId: this.boardId,
        column: column
      }
    });

    dialogRef.afterClosed().subscribe((task: Tasks) => {
      if (task) {
        this.getTasks()
      }
    })
  }

  private getTasks() {
    this.taskService.getTasks({boardId: this.boardId}).subscribe(tasks => {
      this.tasks = _.groupBy(tasks, 'boardColumnId')
      console.log(tasks)

    })
  }

  viewTask(task: Tasks, column: Column) {
    const  dialogRef = this.dialog.open(TaskAddEditComponent, {
      width: '1000px',
      data: {
        boardId: this.boardId,
        column: column,
        taskId: task.id
      },
    });
    dialogRef.afterClosed().subscribe((task: Tasks) => {
      if (task) {
        this.getTasks()
      }
    })}

}
