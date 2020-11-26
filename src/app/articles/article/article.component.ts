import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { IArticle } from 'src/app/core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  userId: string;
  admin: boolean;
  phones$: Observable<Array<IArticle>>;
  cases$: Observable<Array<IArticle>>;
  screenProtectors$: Observable<Array<IArticle>>;
  accessories$: Observable<Array<IArticle>>;

  constructor(private articleService: ArticleService, private userService: UserService) { }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId');
    console.log('this is userid ' + this.userId);
    this.admin = sessionStorage.getItem('admin') === 'true'? true: false;
    this.phones$ = this.articleService.getAllPhones().pipe(map(articles => articles.slice(0,4)));
    this.cases$ = this.articleService.getAllCases().pipe(map(articles => articles.slice(0,4)));
    this.screenProtectors$ = this.articleService.getAllScreenProtectors().pipe(map(articles => articles.slice(0,4)));
    this.accessories$ = this.articleService.getAllAccessories().pipe(map(articles => articles.slice(0,4)));
  }

  addToBasket(articleId) {
    this.articleService.addToBasket(articleId, this.userId).subscribe(() => {
      console.log('success')
    }, err => { console.error(err); })
  }

  addToFavorites(articleId) {
    this.articleService.addToFavorites(articleId, this.userId).subscribe(() => {
      console.log('success')
    }, err => { console.error(err); })
  }
}
