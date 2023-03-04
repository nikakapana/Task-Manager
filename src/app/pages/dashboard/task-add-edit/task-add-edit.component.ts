import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {TaskService} from "../../../core/services/task.service";
import {IssueTypeService} from "../../../core/services/issue-type.service";
import {EpicService} from "../../../core/services/epic.service";
import {BoardService} from "../../../core/services/board.service";
import {ProjectsService} from "../../../core/services/projects.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Board, Column} from "../../../core/interfaces/board";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable, Subject, takeUntil} from "rxjs";
import {IssueType, User} from "../../../core/interfaces";
import {Epic} from "../../../core/interfaces/epic";
import {TaskPriority} from "../../../core/enums";

@Component({
  selector: 'app-task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrls: ['./task-add-edit.component.scss']
})
export class TaskAddEditComponent implements  OnDestroy{


  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    issueTypeId: new FormControl(null, Validators.required),
    epicId: new FormControl(null),
    priority: new FormControl(null, Validators.required),
    assigneeId: new FormControl(null),
    reporterId: new FormControl(null, Validators.required),
    boardId: new FormControl(null),
    boardColumnId: new FormControl(null),
    isBacklog: new FormControl(false, Validators.required),
    // taskStatus: new FormControl(this.data.column?.taskStatus || 'ToDo', Validators.required)

  })

  sub$ = new Subject();
  boards$: Observable<Board[]> = this.boardService.getBoards();
  types$: Observable<IssueType[]> = this.issueTypeService.getIssueTypes();
  epics$: Observable<Epic[]> = this.epicService.getEpics();
  users$: Observable<User[]> = this.projectsService.getProjectUsers()
  priority = TaskPriority


  constructor(
    private taskService: TaskService,
    private issueTypeService: IssueTypeService,
    private epicService: EpicService,
    private boardService: BoardService,
    private projectsService: ProjectsService,
    public dialogRef: MatDialogRef<TaskAddEditComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: { taskId: number, boardId: number, column: Column, isBacklog: boolean  }
  ) {
  }

  //
  //
  // ngOnInit(): void {
  //
  //
  //   if (this.data.isBacklog) {
  //     this.form.patchValue({isBacklog: this.data.isBacklog})
  //     this.form.get('boardId')?.clearValidators()
  //     this.form.get('boardColumnId')?.clearValidators()
  //   } else {
  //     this.form.get('boardId')?.setValidators(Validators.required)
  //     this.form.get('boardColumnId')?.setValidators(Validators.required)
  //   }
  //   this.form.get('boardId')?.updateValueAndValidity()
  //   this.form.get('boardColumnId')?.updateValueAndValidity()
  //   if (this.data.boardId) {
  //     this.form.patchValue({boardId: this.data.boardId})
  //   }
  //
  //   if (this.data.column) {
  //     this.form.patchValue({boardColumnId: this.data.column.id})
  //   }
  //
  //
  // }
  //
  //
  // save() {
  //   console.log(this.form)
  //   this.form.markAllAsTouched()
  //   if (this.form.invalid) return;
  //
  //   if (this.data.taskId) {
  //     this.taskService.updateTask(this.data.taskId, this.form.value)
  //       .pipe(takeUntil(this.sub$))
  //       .subscribe(res => {
  //         this.dialogRef.close(res)
  //       })
  //   } else {
  //     this.taskService.createTask(this.form.value)
  //       .pipe(takeUntil(this.sub$))
  //       .subscribe(res => {
  //         this.dialogRef.close(res)
  //       })
  //   }
  // }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }

}
