import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { INewestArticles } from 'src/app/core/models';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  newestArticles$: Observable<INewestArticles>;
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.newestArticles$ = this.articleService.getNewestArticle();
  }

}
