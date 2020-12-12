import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/models';
import { admin } from 'src/app/+store'
import { users } from 'src/app/+store/admin/actions'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users$: Observable<IUser[]>;
  constructor(private store: Store) {
    this.users$ = this.store.select(admin.users);
  }

  ngOnInit(): void {
    this.store.dispatch(users());
  }
}
