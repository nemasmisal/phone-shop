import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { auth } from 'src/app/+store';
import { article } from 'src/app/+store';
import { removeArticle } from 'src/app/+store/article/action';
import { addToBasket, addToFavorites } from 'src/app/+store/user/actions';
import { IArticleState } from 'src/app/+store/models';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
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

  addToBasket(articleId: string) {
    this.store.dispatch(addToBasket({ payload: { id: articleId } }));
  }

  addToFavorites(articleId: string) {
    this.store.dispatch(addToFavorites({ payload: { id: articleId } }));
  }

  removeArticle(articleId: string) {
    this.store.dispatch(removeArticle({ payload: { id: articleId } }));
  }
}
