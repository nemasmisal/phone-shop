import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as auth from '../../+store/auth/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[A-Za-z0-9]+')]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[A-Za-z0-9]+')]],
    });
  }

  login() {
    if (this.form.invalid) { return; }
    const { username, password } = this.form.value;
    this.store.dispatch(auth.login({ username, password }));
  }

  get f() {
    return this.form.controls;
  }
}
