import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { IArticle } from 'src/app/core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { getAuthUserId, getAuthAdmin } from 'src/app/+store/index';

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

  constructor(private articleService: ArticleService, private userService: UserService, private auth: AuthService, private store: Store) {
   
  }

  ngOnInit(): void {
    this.userId$ = this.store.select(getAuthUserId);
    this.admin$ = this.store.select(getAuthAdmin);
    this.phones$ = this.articleService.getAllPhones().pipe(map(articles => articles.slice(0, 4)));
    this.cases$ = this.articleService.getAllCases().pipe(map(articles => articles.slice(0, 4)));
    this.screenProtectors$ = this.articleService.getAllScreenProtectors().pipe(map(articles => articles.slice(0, 4)));
    this.accessories$ = this.articleService.getAllAccessories().pipe(map(articles => articles.slice(0, 4)));
  }

  addToBasket(articleId: string) {
    this.articleService.addToBasket(articleId).subscribe(() => {
      console.log('success')
    }, err => { console.error(err); })
  }

  addToFavorites(articleId: string) {
    this.articleService.addToFavorites(articleId).subscribe(() => {
      console.log('success')
    }, err => { console.error(err); })
  }
}
