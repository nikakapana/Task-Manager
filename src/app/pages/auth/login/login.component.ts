import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {AuthFacadeService} from "../auth.facade.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy  {

  form: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })


  sub$ = new Subject()

  constructor(
    private authFacadeService: AuthFacadeService,
  private router: Router
  ) {
  }

  ngOnInit(): void {
  }


  submit() {
    this.form.markAllAsTouched()

    if (this.form.invalid) return
    console.log(this.form.value)
    this.authFacadeService.login(this.form.value)
      .pipe(takeUntil(this.sub$))
      .subscribe( {
          next: res => {
            if(res) {
              console.log(res)
              setTimeout(() => {
                this.router.navigate(['/'])
              }, 1000);

            }
          }
        }

      )
  }

  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }
}
