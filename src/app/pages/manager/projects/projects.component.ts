import { Component, OnInit } from '@angular/core';
import { ProjectsService } from "../../../core/services/projects.service";
import { Subject, takeUntil } from "rxjs";
import { Project } from "../../../core/interfaces";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  sub$ = new Subject()
  projects: Project[] = []
  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }


  getAll() {
    this.projectsService.getMyProjects()
      // .pipe(takeUntil(this.sub$))
      .subscribe(res => {
        this.projects = res
        console.log(this.projects)

      })
  }



}
