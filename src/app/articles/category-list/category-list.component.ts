import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/core/models/article';
import { getCategory } from 'src/app/+store';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  category$: Observable<IArticle[]>;
  category: string;
  constructor(private route: ActivatedRoute, private store: Store) {
    this.category = route.snapshot.params['name'];
    this.category$ = store.select(getCategory, { name: this.category });
  }
}
