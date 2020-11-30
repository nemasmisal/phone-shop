import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActionTypes } from '../../+store/auth/actions';
import * as auth from '../../+store/auth/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private store: Store) { }
  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  login() {
    const { username, password } = this.form.value;
    this.store.dispatch(auth.login({ username, password }));
  }
}
