import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";

import {Observable} from "rxjs";
import {Project} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends BaseService{


  create(project: Project): Observable<Project>{
    return this.post<Project>('product', project)
  }

}
