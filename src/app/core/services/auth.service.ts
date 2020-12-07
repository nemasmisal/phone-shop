import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { Observable } from 'rxjs';
import { IUser } from '../models';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  
  checkAuth() {
    return this.http.get(apiURL + '/user/checkAuth');
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
}
