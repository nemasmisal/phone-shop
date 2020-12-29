import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/core/models/article';
import { user } from 'src/app/+store'
import { basket, orderBasket, removeFromBasket } from 'src/app/+store/user/actions'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket$: Observable<IArticle[]>;
  totalAmount: string;

  constructor(private store: Store) {
    this.basket$ = store.select(user.basket);
  }

  ngOnInit(): void {
    this.store.dispatch(basket());
    this.store.select(user.basket).subscribe(basket => {
      this.totalAmount = basket.reduce((acc, curr) => acc + Number(curr.price), 0).toFixed(2);
    })
  }

  placeOrder() {
    this.store.dispatch(orderBasket());
  }

  removeFromBasket(articleId: string) {
    this.store.dispatch(removeFromBasket({ payload: { id: articleId } }));
  }

}
