import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/core/models/article';
import { UserService } from 'src/app/core/services/user.service';
import * as user from 'src/app/+store'
import { favorites } from 'src/app/+store/user/actions'


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites$: Observable<IArticle[]>;
  constructor(private store: Store) {
    this.favorites$ = store.select(user.getUserFavorites);
  }

  ngOnInit(): void {
    this.store.dispatch(favorites())
    // this.userId = sessionStorage.getItem('userId');
    // this.userService.profile(this.userId).subscribe((user) => {
    //   this.favorites = user.favorites;
    // }, err => console.error(err))
  }

}
