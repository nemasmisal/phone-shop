import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { getUser } from 'src/app/+store';
import { IUser } from 'src/app/core/models';
import { updateUser } from 'src/app/+store/admin/actions'


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  user$: Observable<IUser>
  form: FormGroup;
  id: string;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[A-Za-z0-9]+')]],
      password: ['', [Validators.minLength(5), Validators.maxLength(20), Validators.pattern('[A-Za-z0-9]+')]],
      admin: ['', [Validators.required]],
    })
    this.user$ = this.store.select(getUser, { id: this.id }).pipe(tap(user => {
      this.form.setValue({ username: user.username, admin: user.admin ? 'true' : 'false', password: '' });
    }))
  }

  editUser(userId: string) {
    if (this.form.invalid) { return; }
    const { username, password, admin } = this.form.value;

    this.store.dispatch(updateUser({ username, password, admin, userId }));
  }

  get f() {
    return this.form.controls;
  }
}
