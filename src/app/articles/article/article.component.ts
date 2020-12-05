import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IArticle } from 'src/app/core/models/article';
import { getAuthUserId, getAuthAdmin } from 'src/app/+store';
import * as article from 'src/app/+store';
import { removeArticle, getAll } from 'src/app/+store/article/action';
import { addToBasket, addToFavorites } from 'src/app/+store/user/actions';
import { IArticleState } from 'src/app/+store/models';


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
  all$: Observable<IArticleState>;
  constructor(private store: Store) {
    this.phones$ = store.select(article.getPhones);
    this.cases$ = store.select(article.getCases);
    this.screenProtectors$ = store.select(article.getScreenProtectors);
    this.accessories$ = store.select(article.getAccessories);
    this.all$ = store.select(article.getAll);
    this.userId$ = store.select(getAuthUserId);
    this.admin$ = store.select(getAuthAdmin);
  }

  ngOnInit(): void {
    this.store.dispatch(getAll());
  }

  addToBasket(articleId: string) {
    this.store.dispatch(addToBasket({ payload: articleId }));
  }

  addToFavorites(articleId: string) {
    this.store.dispatch(addToFavorites({ payload: articleId }));
  }

  removeArticle(articleId: string) {
    this.store.dispatch(removeArticle({ id: articleId }));
  }
}
