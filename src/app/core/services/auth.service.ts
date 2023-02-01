import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { SignIn, AuthResponse, SignUp } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  signin(payLoad: SignIn): Observable<AuthResponse> {
    return this.post<AuthResponse>('/auth/login', payLoad);
  }

  signup(payLoad: SignUp): Observable<AuthResponse> {
    return this.post<AuthResponse>('/auth/signup', payLoad);
  }
}
