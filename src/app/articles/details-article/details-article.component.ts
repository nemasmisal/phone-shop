import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';
import * as auth from 'src/app/+store';
import { addToBasket, addToFavorites } from 'src/app/+store/user/actions'
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {
  admin$: Observable<boolean>;
  userId$: Observable<string>;
  article$: Observable<IArticle>;
  alreadyLiked: boolean;
  articleId: string;

  constructor(private articleService: ArticleService, private router: Router, private route: ActivatedRoute, private store: Store) {
    this.userId$ = store.select(auth.getAuthUserId);
    this.admin$ = store.select(auth.getAuthAdmin);
  }
  ngOnInit() {
    this.articleId = this.route.snapshot.params['id'];
    this.article$ = this.articleService.getArticleById(this.articleId);
  }

  // like(articleId: string) {
  //   this.articleService.likeArticle(articleId).subscribe(() => {
  //     this.router.navigate(['article', 'details', articleId]);
  //   }, err => {
  //     console.error(err);
  //   })
  // }

  addToBasket(articleId: string) {
    this.store.dispatch(addToBasket({ payload: articleId }));
  }

  addToFavorites(articleId: string) {
    this.store.dispatch(addToFavorites({ payload: articleId }));
  }

  removeArticle(articleId: string) {
    this.articleService.removeArticle(articleId).subscribe(() => {
      this.router.navigate(['home']);
    }, err => { console.error(err); })
  }
}
