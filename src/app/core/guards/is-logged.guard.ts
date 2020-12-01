import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLogged } from 'src/app/+store'

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {
  canContinue$: Observable<boolean>
  constructor(private store: Store, private router: Router) { }
  canActivate(): Observable<boolean> {
    return this.canContinue$ = this.store.select(isLogged);
  }
}