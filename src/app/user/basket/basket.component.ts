import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/core/models/article';
import { UserService } from 'src/app/core/services/user.service';
import * as user from 'src/app/+store'
import { basket, orderBasket, removeFromBasket } from 'src/app/+store/user/actions'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket$: Observable<IArticle[]>;
  //totalAmount: number;

  constructor(private store: Store) {
    this.basket$ = store.select(user.getUserBasket);
  }

  ngOnInit(): void {
    this.store.dispatch(basket());
  }

  placeOrder() {
    this.store.dispatch(orderBasket());
  }

  removeFromBasket(articleId: string) {
    this.store.dispatch(removeFromBasket({ payload: articleId }));
  }

}
