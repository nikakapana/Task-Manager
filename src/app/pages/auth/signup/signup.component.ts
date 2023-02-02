import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })



  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value, 'asd')
    this.authService.signup(this.form.value).subscribe(res => {
      console.log(res)
    })
    if (this.form.valid) {
      // logic for submitting the form data goes here
      console.log('Form is valid');
    } else {
      console.log('Form is invalid');
      this.form.markAllAsTouched();
    }


  }
}
