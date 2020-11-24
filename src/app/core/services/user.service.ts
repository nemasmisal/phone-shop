import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { Observable } from 'rxjs';
import { IUser } from '../models/user';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  postUserLogin(userCredentials): Observable<IUser> {
    return this.http.post<IUser>(apiURL + '/user/login', userCredentials);
  }

  postUserRegister(userCredentials): Observable<IUser> {
    return this.http.post<IUser>(apiURL + '/user/register', userCredentials);
  }

  getUserLogout(): Observable<any> {
    return this.http.get<any>(apiURL + '/user/logout');
  }

  addToBasket(userId: string, articleId: string) {
    return this.http.post(apiURL + '/user/basket/add', { userId, articleId });
  }

  addToFavorites(userId: string, articleId: string) {
    return this.http.post(apiURL + '/user/favorites/add', { userId, articleId });
  }
}
