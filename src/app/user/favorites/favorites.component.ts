import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/core/models/article';
import { user } from 'src/app/+store'
import { favorites, removeFromFavorites } from 'src/app/+store/user/actions'


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites$: Observable<IArticle[]>;
  constructor(private store: Store) {
    this.favorites$ = store.select(user.favorites);
  }

  ngOnInit(): void {
    this.store.dispatch(favorites())
  }

  removeFromFavorites(articleId: string) {
    this.store.dispatch(removeFromFavorites({ payload: { id: articleId } }));
  }
}
