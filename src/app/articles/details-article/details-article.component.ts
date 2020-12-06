import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';
import { auth } from 'src/app/+store';
import { addToBasket, addToFavorites } from 'src/app/+store/user/actions';
import { removeArticle, likeArticle } from 'src/app/+store/article/action';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {
  admin$: Observable<boolean>;
  userId$: Observable<string>;
  article$: Observable<IArticle>;
  alreadyLiked: Observable<boolean>;
  articleId: string;

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private store: Store) {
    this.admin$ = store.select(auth.admin);
    this.userId$ = this.store.select(auth.userId);
  }
  ngOnInit() {
    this.articleId = this.route.snapshot.params['id'];
    this.article$ = this.articleService.getArticleById(this.articleId);
  }

  like(articleId: string) {
    this.store.dispatch(likeArticle({ id: articleId }));
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
