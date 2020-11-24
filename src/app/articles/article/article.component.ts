import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  admin: string;
  phones$: Observable<Array<IArticle>>;
  cases$: Observable<Array<IArticle>>;
  screenProtectors$: Observable<Array<IArticle>>;
  accessories$: Observable<Array<IArticle>>;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.admin = sessionStorage.getItem('admin');
    this.phones$ = this.articleService.getAllPhones();
    this.cases$ = this.articleService.getAllCases();
    this.screenProtectors$ = this.articleService.getAllScreenProtectors();
    this.accessories$ = this.articleService.getAllAccessories();
  }

}
