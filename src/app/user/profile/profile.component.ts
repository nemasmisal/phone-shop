import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/core/models';
import * as state from 'src/app/+store';
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
    this.username$ = store.select(state.getAuthUsername);
    this.basket$ = store.select(state.getUserBasket);
    this.favorites$ = store.select(state.getUserFavorites);
  }

  ngOnInit() {
    this.store.dispatch(basket());
    this.store.dispatch(favorites());
  }
}
