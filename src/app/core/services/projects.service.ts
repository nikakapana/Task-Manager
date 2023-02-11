import {Inject, Injectable} from '@angular/core';
import {BaseService} from "./base.service";

import {Observable, tap} from "rxjs";
import {Project} from "../interfaces";
import {ProjectFacade} from "../facades/project.facade";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends BaseService{

   constructor(private projectFacade: ProjectFacade) {
     super();
   }

getAllProjects() : Observable<Project[]> {
  return this.get<Project[]>('project/all')
}

  getMyProjects() : Observable<Project[]> {
    return this.get<Project[]>('project/my')
  }


  getOne(id: string): Observable<Project> {
    return this.get<Project>(`project/${id}`)
  }

  create(project: Project): Observable<Project>{
    return this.post<Project>('project', project)
      .pipe(
        tap(res => {
          if(res) {
this.projectFacade.setProject(res)
          }
        })
      )
  }

  update(id: string, project: Project): Observable<Project> {
    return this.put<Project>(`project/${id}`, project)
  }

    deleteItem(id: string): Observable<Project> {
    return this.delete<Project>(`project/${id}`)
  }

}
