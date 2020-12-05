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

  profile(userId: string): Observable<IUser> {
    return this.http.get<IUser>(apiURL + `/user/profile/${userId}`);
  }

  login(data: { username: string, password: string }): Observable<IUser> {
    return this.http.post<IUser>(apiURL + '/user/login', data);
  }

  register(data: { username: string, password: string }): Observable<IUser> {
    return this.http.post<IUser>(apiURL + '/user/register', data);
  }

  logout(): Observable<any> {
    return this.http.get<any>(apiURL + '/user/logout');
  }

  getBasket() {
    return this.http.get(apiURL + '/user/basket');
  }

  addToBasket(articleId) {
    return this.http.post(apiURL + '/user/basket/add', { articleId });
  }

  removeFromBasket(articleId) {
    return this.http.post(apiURL + '/user/basket/remove', { articleId });
  }

  getFavorites() {
    return this.http.get(apiURL + '/user/favorites');
  }

  addToFavorites(articleId) {
    return this.http.post(apiURL + '/user/favorites/add', { articleId });
  }

  removeFromFavorites(articleId) {
    return this.http.post(apiURL + '/user/favorites/remove', { articleId });
  }

  placeOrder() {
    return this.http.get(apiURL + '/user/order');
  }

  getUsers() {
    return this.http.get(apiURL + '/user/all');
  }

  updateUser(user) {
    return this.http.post(apiURL + '/user/update', user);
  }
}
