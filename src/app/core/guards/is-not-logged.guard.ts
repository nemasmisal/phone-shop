import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { auth } from 'src/app/+store';

@Injectable({
  providedIn: 'root'
})
export class IsNotLoggedGuard implements CanActivate {
  constructor(private router: Router, private store: Store) { }
  canActivate(): Observable<boolean> {
    return this.store.select(auth.isLogged()).pipe(
      tap(x => {
        if (x) { return of(false); }
        this.router.navigate(['home']);
        return of(false);
      })
    );
  }
}
