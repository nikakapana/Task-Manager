import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectsService} from "../../../core/services/projects.service";
import {Subject, takeUntil} from "rxjs";
import {Project} from "../../../core/interfaces";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  sub$ = new Subject()
  projects: Project[] = []
  constructor(
    private projectsService: ProjectsService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show().then()
    this.getAll()

  }


  getAll() {
    this.projectsService.getMyProjects()
      .pipe(takeUntil(this.sub$))
      .subscribe(res => {
        this.projects = res
        console.log(this.projects)
        this.spinner.hide().then()
      })
  }

  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()

  }



}

