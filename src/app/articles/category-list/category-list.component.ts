import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/core/models/article';
import { article } from 'src/app/+store';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  category$: Observable<IArticle[]>;
  category: string;
  constructor(private route: ActivatedRoute, private store: Store) {
    this.route.params.subscribe(params => {
      this.category = params.name;
      this.category$ = store.select(article.category, { name: this.category });
    })
  }
}
