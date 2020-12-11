import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/core/models/article';
import { article } from 'src/app/+store';
import { trigger, style, animate, transition, query, group } from '@angular/animations';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', group([
        query(':enter', [
          style({
            transform: 'translateX(100%)'
          }),
          animate('0.5s ease-in')
        ]),
        query(':leave', [
          animate('0.5s ease-out', style({
            transform: 'translateX(-100%)'
          }))
        ])
      ])),
      transition(':decrement', group([
        query(':enter', [
          style({
            transform: 'translateX(-100%)'
          }),
          animate('0.5s ease-in')
        ]),
        query(':leave', [
          animate('0.5s ease-out', style({
            transform: 'translateX(100%)'
          }))
        ])
      ]))
    ])
  ]
})
export class CategoryListComponent {
  first: boolean = false;
  second: boolean = false;
  category$: Observable<IArticle[]>;
  categoryName: string;
  topLikes$: Observable<IArticle[]>;
  currentIndex: number = 0;
  constructor(private route: ActivatedRoute, private store: Store) {
    this.route.params.subscribe(params => {
      this.categoryName = params.name;
      this.category$ = store.select(article.category, { name: this.categoryName });
      this.topLikes$ = store.select(article.topLiked, { category: this.categoryName });
    })
  }

  setCurrentSlideIndex(index: number): void {
    this.currentIndex = index;
  }

  isCurrentSlideIndex(index: number): boolean {
    return this.currentIndex === index;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : 2;
  }
  nextSlide(): void {
    this.currentIndex = (this.currentIndex < 2) ? ++this.currentIndex : 0;
  }
}
