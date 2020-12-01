import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/+store';
import * as auth from 'src/app/+store';
import { logout } from 'src/app/+store/auth/actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  username$: Observable<string>;
  userId$: Observable<string>;
  admin$: Observable<boolean>;
  constructor(private store: Store<IAppState>) {
    this.username$ = store.select(auth.getAuthUsername);
    this.userId$ = store.select(auth.getAuthUserId);
    this.admin$ = store.select(auth.getAuthAdmin);
  }

  logout() {
    this.store.dispatch(logout());
  }
}