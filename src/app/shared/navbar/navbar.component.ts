import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAuthAdmin, getAuthUserId, getAuthUsername, IAppState } from 'src/app/+store';
import { ActionTypes } from 'src/app/+store/auth/actions';

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
    this.username$ = store.select(getAuthUsername);
    this.userId$ = store.select(getAuthUserId);
    this.admin$ = store.select(getAuthAdmin);
  }

  logout() {
    this.store.dispatch({ type: ActionTypes.Logout });
  }

}
