import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthFacadeService} from "../../pages/auth/auth.facade.service";
import {ProjectsService} from "../../core/services/projects.service";
import {Subject} from "rxjs";
import {Project} from "../../core/interfaces";
import {ProjectFacade} from "../../core/facades/project.facade";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {


  sub$ = new Subject()
  projects = []


  currentProject?: Project = this.projectFacade.getProject()
  projects$ = this.projectFacade.myProjects$;
  constructor(
    private authFacadeService: AuthFacadeService,
    private projectsService: ProjectsService,
    private  projectFacade: ProjectFacade,
    private router: Router
  ) { }

  get project(): Project {
    return this.projectFacade.getProject()
  }

  ngOnInit(): void {
    this.getMyProjects();

  }


  get userIsAuthenticated() {
    return this.authFacadeService.token
  }
  getMyProjects() {
    this.projectFacade.getMyProjects$().subscribe();
  }

  signOut() {
    this.authFacadeService.signOut()
  }

  selectProject(projectId: any) {
    console.log(projectId)
    this.projectFacade.setProject(projectId)

  }

  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()

  }
}
