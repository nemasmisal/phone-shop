import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../+store/auth/actions';
import { comparePasswordsValidator } from "./confirmed.validator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[A-Za-z0-9]+')]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('[A-Za-z0-9]+')]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: comparePasswordsValidator("password", "confirmPassword") }
    )
  }

  register() {
    if(this.form.invalid) { return; }
    const { username, password } = this.form.value;
    this.store.dispatch(register({ username, password }));
  }

  get f() {
    return this.form.controls;
  }
}
