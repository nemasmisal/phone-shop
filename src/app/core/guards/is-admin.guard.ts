import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAuthAdmin } from 'src/app/+store';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  canContinue$: Observable<boolean>;
  constructor(private store: Store) { }
  canActivate(): Observable<boolean> {
    return this.canContinue$ = this.store.select(getAuthAdmin);
  }
}
