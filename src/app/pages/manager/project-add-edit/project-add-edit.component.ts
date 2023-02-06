import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {ProjectsService} from "../../../core/services/projects.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-project-add-edit',
  templateUrl: './project-add-edit.component.html',
  styleUrls: ['./project-add-edit.component.scss']
})
export class ProjectAddEditComponent implements OnInit {




  constructor(
    private projectsService: ProjectsService,
    private router: Router
  ) {}

  ngOnInit(): void {

    }


  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
      abbreviation: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
  }
  )

  errorMessage?: string

  submit() {
    this.form.markAllAsTouched()

    if (this.form.invalid) return

    else {

      this.projectsService.create(this.form.value)
        .pipe()
        .subscribe(res => {

          this.router.navigate(['projects'])
            .then(() => {
              this.form.reset()
            })
        })
    }

  }
}
