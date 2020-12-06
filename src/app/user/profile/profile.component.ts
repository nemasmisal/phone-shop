import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/core/models';
import {auth, user} from 'src/app/+store';
import { basket, favorites } from 'src/app/+store/user/actions'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  basket$: Observable<IArticle[]>;
  favorites$: Observable<IArticle[]>;
  username$: Observable<string>
  constructor(private store: Store) {
    this.username$ = store.select(auth.username);
    this.basket$ = store.select(user.basket);
    this.favorites$ = store.select(user.favorites);
  }

  ngOnInit() {
    this.store.dispatch(basket());
    this.store.dispatch(favorites());
  }
}
