import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'
import { IArticle } from '../models'
import { IAsideState } from 'src/app/+store/models'
const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticlesByCategory(category) {
    return this.http.get<Array<IArticle>>(apiURL + `/article/${category}`);
  }

  getAllArticles() {
   return this.http.get(apiURL + '/article/all');
  }

  getAllPhones(): Observable<Array<IArticle>> {
    return this.http.get<Array<IArticle>>(apiURL + '/article/phones');
  }

  getAllCases(): Observable<Array<IArticle>> {
    return this.http.get<Array<IArticle>>(apiURL + '/article/cases');
  }

  getAllScreenProtectors(): Observable<Array<IArticle>> {
    return this.http.get<Array<IArticle>>(apiURL + '/article/screenProtectors');
  }

  getAllAccessories(): Observable<Array<IArticle>> {
    return this.http.get<Array<IArticle>>(apiURL + '/article/accessories');
  }

  createArticle(article: IArticle) {
    return this.http.post(apiURL + '/article/create', article);
  }

  getArticleById(id: string): Observable<IArticle> {
    return this.http.get<IArticle>(apiURL + `/article/${id}`);
  }

  postEditArticle(id: string, article: IArticle) {
    return this.http.post(apiURL + `/article/edit/${id}`, article);
  }

  likeArticle(articleId: string) {
    return this.http.post(apiURL + '/article/like', { articleId });
  }

  removeArticle(articleId: string) {
    return this.http.delete(apiURL + `/article/remove/${articleId}`);
  }

  addToBasket(articleId: string) {
    return this.http.post(apiURL + '/user/basket/add', { articleId });
  }

  addToFavorites(articleId: string) {
    return this.http.post(apiURL + '/user/favorites/add', { articleId });
  }

  getNewestArticle(): Observable<IAsideState> {
    return this.http.get<IAsideState>(apiURL + '/article/newest')
  }
}
