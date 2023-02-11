import { Injectable } from '@angular/core';
import {Project} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProjectFacade {

  constructor() { }

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
