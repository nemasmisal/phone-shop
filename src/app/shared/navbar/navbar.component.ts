import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { auth } from 'src/app/+store';
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
  constructor(private store: Store) {
    this.username$ = store.select(auth.username);
    this.userId$ = store.select(auth.userId);
    this.admin$ = store.select(auth.admin);
  }

  logout() {
    this.store.dispatch(logout());
  }
}