import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, AfterViewInit, OnChanges, AfterViewChecked{
  category$: Observable<IArticle[]>;
  category:string;
  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.params['name'];
    this.category$ = this.articleService.getArticlesByCategory(this.category);
  }

  ngAfterViewInit() {
    console.log('after view init')
  }

  ngOnChanges() {
    console.log('on changes')
  }

  ngAfterViewChecked() {
   console.log('stop')
  }

 
}
