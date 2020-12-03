import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IArticle } from 'src/app/core/models/article';
import { getAuthUserId, getAuthAdmin } from 'src/app/+store';
import * as article from 'src/app/+store'
import { getPhones, getCases, getScreenProtectors, getAccessories } from 'src/app/+store/article/action'
import { addToBasket, addToFavorites } from 'src/app/+store/user/actions'


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  userId$: Observable<string>;
  admin$: Observable<boolean>;
  phones$: Observable<Array<IArticle>>;
  cases$: Observable<Array<IArticle>>;
  screenProtectors$: Observable<Array<IArticle>>;
  accessories$: Observable<Array<IArticle>>;

  constructor(private store: Store) {
    this.phones$ = store.select(article.getPhones).pipe(map(phones => phones.slice(0, 4)));
    this.cases$ = store.select(article.getCases).pipe(map(cases => cases.slice(0, 4)));
    this.screenProtectors$ = store.select(article.getScreenProtectors).pipe(map(screenProtectors => screenProtectors.slice(0, 4)));
    this.accessories$ = store.select(article.getAccessories).pipe(map(accessories => accessories.slice(0, 4)));
  }

  ngOnInit(): void {
    this.store.dispatch(getPhones());
    this.store.dispatch(getCases());
    this.store.dispatch(getScreenProtectors());
    this.store.dispatch(getAccessories());
    this.userId$ = this.store.select(getAuthUserId);
    this.admin$ = this.store.select(getAuthAdmin);
  }

  addToBasket(articleId: string) {
    this.store.dispatch(addToBasket({ payload: articleId }));
  }

  addToFavorites(articleId: string) {
    this.store.dispatch(addToFavorites({ payload: articleId }));
  }
}
