import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from '../../../../core/services/board.service'

@Component({
  selector: 'app-board-add-edit',
  templateUrl: './board-add-edit.component.html',
  styleUrls: ['./board-add-edit.component.scss']
})
export class BoardAddEditComponent implements OnInit {

  constructor(
    private readonly boardService: BoardService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    position: new FormControl(1),
    columns: new FormControl([])
  })

  submit() {
    this.boardService.createBoard(this.form.value)
      .subscribe(res => {
        this.router.navigate(['/projects/setting/boards']).then()
      })
  }

  close() {
    history.back();
  }
}
