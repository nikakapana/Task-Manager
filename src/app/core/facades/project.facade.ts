import { Injectable } from '@angular/core';
import {Project} from "../interfaces";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {ProjectsService} from "../services/projects.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectFacade {


  constructor(
    // private projectsService: ProjectsService

  ) { }

  setProject(project: Project): void {
    if (project && project.id) {
      localStorage.setItem('project', JSON.stringify(project))
    }
  }



  getProject(): Project {
    const project = localStorage.getItem('project')
    return project ? JSON.parse(project) : null
  }



}
