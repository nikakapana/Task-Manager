import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss']
})
export class ProjectAddComponent implements OnInit {




  constructor( ) {}

  ngOnInit(): void {

    }


  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    abrev: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
  }
  )

  errorMessage?: string

  submit() {
    this.form.markAllAsTouched()

    if (this.form.invalid) return

  }
}
