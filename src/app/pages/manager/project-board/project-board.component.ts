import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/interfaces/project';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'app-project-board',
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss']
})
export class ProjectBoardComponent implements OnInit {

  

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
