import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  // constructor() { }

  createUser(data: any) {
    return this.post('/users', data)
  }

  getUsers() {
    return this.get('/users')
  }

  getUser(id: number) {
    return this.get(`/users/${id}`)
  }

  updateUser(id: number, data: any) {
    return this.get(`/users/${id}`, data)
  }

  deleteUser(id: number){
    return this.delete(`/users/${id}`)
  }
}
