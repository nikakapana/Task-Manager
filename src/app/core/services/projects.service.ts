import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";

import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends BaseService{


getProjects(): Observable<any> {

  return this.get<any>('project/all')

}


}
