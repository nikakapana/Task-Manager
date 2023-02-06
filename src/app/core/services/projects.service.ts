import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";

import {Observable} from "rxjs";
import {Project} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends BaseService{


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
  }

  update(id: string, project: Project): Observable<Project> {
    return this.put<Project>(`project/${id}`, project)
  }

    deleteItem(id: string): Observable<Project> {
    return this.delete<Project>(`project/${id}`)
  }

}
