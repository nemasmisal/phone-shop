import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { comparePasswordsValidator } from "./confirmed.validator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[A-Za-z0-9]+')]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('[A-Za-z0-9]+')]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: comparePasswordsValidator("password", "confirmPassword") }
    )
  }

  register() {
    this.userService.postUserRegister(this.form.value).subscribe((user) => {
      sessionStorage.setItem('username', user.username);
      sessionStorage.setItem('userId', user.id);
      this.router.navigate(['home'])
    }, err => {
      console.error(err);
    })
  }

  get f() {
    return this.form.controls;
  }
}
