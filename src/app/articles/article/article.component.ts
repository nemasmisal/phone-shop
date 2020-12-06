import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IArticle } from 'src/app/core/models/article';
import { auth } from 'src/app/+store';
import { article } from 'src/app/+store';
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
    this.phones$ = store.select(article.phones);
    this.cases$ = store.select(article.cases);
    this.screenProtectors$ = store.select(article.screenProtectors);
    this.accessories$ = store.select(article.accessories);
    this.all$ = store.select(article.all);
    this.userId$ = store.select(auth.userId);
    this.admin$ = store.select(auth.admin);
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
