import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn() {
    return sessionStorage.getItem('userId') !== null ? true : false;
  }

  isAdmin() {
    return sessionStorage.getItem('admin') === 'true' ? true : false;
  }

  isNotLogged() {
    return sessionStorage.getItem('userId') !== null ? false : true;
  }
}
