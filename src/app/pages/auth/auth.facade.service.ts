import {inject, Injectable} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {AuthResponse, Login, User} from "../../core/interfaces";
import {tap} from "rxjs";
import {CookieStorageService} from "../../core/services/cookie.service";
import {ProjectFacade} from "../../core/facades/project.facade";

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService extends AuthService{

  cookieStorageService: CookieStorageService = inject(CookieStorageService);
projectFacade: ProjectFacade = inject(ProjectFacade)
  cookieService: any;
  override login(payload: Login) {
    return super.login(payload).pipe(
      tap((response: AuthResponse) => {
        const expiresInMilliseconds = 100000000;

        const cookieExpire = new Date(Date.now() + expiresInMilliseconds);

        console.log('cookie expire');
        console.log(cookieExpire);

        this.cookieStorageService.setCookie(
          'token',
          response.token.accessToken,
          cookieExpire
        );

        this.cookieStorageService.setCookie(
          'refreshToken',
          response.token.refreshToken
        );

        console.log('refresh token');
        console.log(this.RefreshToken);

        this.setUser(response.user);
        if (response.user.projects.length) {

          this.projectFacade.setProject(response.user.projects[0].id)
        }

        console.log(this.token);
        console.log(this.user);
      })
    );
  }

  get token(): string {
    return this.cookieStorageService.getCookie('token');
  }

  get RefreshToken(): string {
    return this.cookieStorageService.getCookie('refreshToken');
  }

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  get user(): User {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // get roles(): string []{
  //   const roles = this.cookieService.getCookie('roles')
  //   return(roles ? JSON.parse(roles) : []) as string[]
  // }

  // get permissions(): string[] {
  //   const permissions = localStorage.getItem('permissions')
  //   return (permissions ? JSON.parse(permissions) : [] as string[])
  // }

  signOut() {
    localStorage.clear();
    this.cookieStorageService.eraseCookie('token');
    this.cookieStorageService.eraseCookie('refreshToken');
  }



}
