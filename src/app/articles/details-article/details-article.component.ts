import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IArticle } from 'src/app/core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {

  constructor(private articleService: ArticleService, private router: Router, private route: ActivatedRoute, private userService: UserService) { }
  admin: boolean;
  alreadyLiked: boolean;
  article$: Observable<IArticle>;
  articleId: string;
  userId: string;
  ngOnInit() {
    this.admin = sessionStorage.getItem('admin') === 'true'? true: false;
    this.articleId = this.route.snapshot.params['id'];
    this.userId = sessionStorage.getItem('userId');
    this.article$ = this.articleService.getArticleById(this.articleId).pipe(tap(article => this.alreadyLiked = article.likes.includes(this.userId)? true: false));
  }

  like() {
    this.articleService.likeArticle(this.articleId, this.userId).subscribe(() => {
      this.router.navigate(['article', 'details', this.articleId]);
    }, err => {
      console.error(err);
    })
  }

  addToBasket() {
    this.userService.addToBasket(this.articleId).subscribe(() => {
      this.router.navigate(['article', 'details', this.articleId]);
    }, err => {
      console.error(err);
    })
  }

  addToFavorites() {
    this.userService.addToFavorites(this.articleId).subscribe(() => {
      this.router.navigate(['article', 'details', this.articleId]);
    }, err => console.error(err))
  }

  removeArticle() {
    this.articleService.removeArticle(this.articleId).subscribe(() => {
      this.router.navigate(['home']);
    }, err => { console.error(err); })
  }
}
