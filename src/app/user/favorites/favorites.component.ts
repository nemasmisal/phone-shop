import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/core/models/article';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: IArticle[];
  userId: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId');
    this.userService.getProfile(this.userId).subscribe((user) => {
      this.favorites = user.favorites;
    }, err => console.error(err))
  }

}
