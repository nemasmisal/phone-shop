import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }
  form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  login() {
    this.userService.postUserLogin(this.form.value).subscribe((user) => {
      sessionStorage.setItem('username', user.username);
      sessionStorage.setItem('userId', user.id);
      sessionStorage.setItem('admin', user.admin);
      this.router.navigate(['home'])
    }, err => {
      console.error(err);
    })
  }
}
