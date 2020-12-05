import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/models';
import { getUsers } from 'src/app/+store'
import { users } from 'src/app/+store/admin/actions'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users$: Observable<IUser[]>;
  constructor(private store: Store) {
    this.users$ = this.store.select(getUsers);
  }

  ngOnInit(): void {
    this.store.dispatch(users());
  }
}
