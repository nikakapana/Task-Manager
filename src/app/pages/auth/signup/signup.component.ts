import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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



  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value)
    if (this.form.valid) {
      // logic for submitting the form data goes here
      console.log('Form is valid');
    } else {
      console.log('Form is invalid');
      this.form.markAllAsTouched();
    }


  }
}
