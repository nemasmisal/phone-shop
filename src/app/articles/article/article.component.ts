import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { auth } from 'src/app/+store';
import { article } from 'src/app/+store';
import { removeArticle, getAll } from 'src/app/+store/article/action';
import { addToBasket, addToFavorites } from 'src/app/+store/user/actions';
import { IArticleState } from 'src/app/+store/models';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  color: ThemePalette;
   
  userId$: Observable<string>;
  admin$: Observable<boolean>;
  articles$: Observable<IArticleState>;
  constructor(private store: Store) {
    this.articles$ = store.select(article.all);
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
