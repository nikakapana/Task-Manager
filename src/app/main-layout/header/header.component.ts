import { Component, OnInit } from '@angular/core';
import {AuthFacadeService} from "../../pages/auth/auth.facade.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authFacadeService: AuthFacadeService
  ) { }

  ngOnInit(): void {
  }


  get userIsAuthenticated() {
    return this.authFacadeService.token
  }

  signOut() {
    this.authFacadeService.signOut()
  }
}
