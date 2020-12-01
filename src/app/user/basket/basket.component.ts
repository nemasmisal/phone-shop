import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/core/models/article';
import { IUser } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import * as user from 'src/app/+store'
import { } from 'src/app/+store/user/actions'
import { TypedAction } from '@ngrx/store/src/models';
import { IUserState } from 'src/app/+store/user/reducer';
import { ActionTypes } from 'src/app/+store/user/actions';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket$: Observable<IArticle[]>;
  //totalAmount: number;

  constructor(private userService: UserService, private router: Router, private store: Store) {
    this.basket$ = store.select(user.getUserBasket)
  }

  ngOnInit(): void {
    this.store.dispatch({ type: ActionTypes.getBasket });
  }

  placeOrder() {
    this.userService.placeOrder().subscribe((res) => {
      this.router.navigate(['home']);
    }, err => console.error(err))
  }

  removeFromBasket(articleId: string) {
    this.userService.removeFromBasket(articleId).subscribe((result) => {
      console.log(result);
    })
  }

}
