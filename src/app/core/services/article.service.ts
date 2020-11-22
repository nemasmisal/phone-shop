import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'
import { IArticle } from '../models/article'

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  constructor(private http: HttpClient) { }

  getAllPhones(): Observable<Array<IArticle>> {
    return this.http.get<Array<IArticle>>(apiURL + 'phones');
  }

  getAllCases(): Observable<Array<IArticle>> {
    return this.http.get<Array<IArticle>>(apiURL + 'cases');
  }

  getAllScreenProtectors(): Observable<Array<IArticle>> {
    return this.http.get<Array<IArticle>>(apiURL + 'screenProtectors');
  }

  getAllAccessories(): Observable<Array<IArticle>> {
    return this.http.get<Array<IArticle>>(apiURL + 'accessories');
  }

  createArticle(article) {
    return this.http.post(apiURL + '/create', article);
  }

  getEditArticle(id: string): Observable<IArticle> {
    return this.http.get<IArticle>(apiURL + `article/${id}`);
  }

  postEditArticle(id: string, article) {
    return this.http.post(apiURL + `/edit/${id}`, article);
  }

}
