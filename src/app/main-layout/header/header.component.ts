import { Component, OnInit } from '@angular/core';
import {AuthFacadeService} from "../../pages/auth/auth.facade.service";
import {ProjectsService} from "../../core/services/projects.service";
import {Observable, shareReplay} from "rxjs";
import {Project} from "../../core/interfaces";
import {ProjectFacade} from "../../core/facades/project.facade";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  projects = []

  projects$: Observable<Project[]> = this.projectsService.getMyProjects()
  currentProject?: Project = this.projectFacade.getProject()

  constructor(
    private authFacadeService: AuthFacadeService,
    private projectsService: ProjectsService,
    private  projectFacade: ProjectFacade,
    private router: Router
  ) { }

  ngOnInit(): void {

  }


  get userIsAuthenticated() {
    return this.authFacadeService.token
  }

  signOut() {
    this.authFacadeService.signOut()
  }

  selectProject($event: string) {
    console.log($event)
    this.projectsService.getOne($event)
      .pipe(
        shareReplay()
      )
      .subscribe(res => res)
    this.router.navigate(['/projects/project'])
  }
}
