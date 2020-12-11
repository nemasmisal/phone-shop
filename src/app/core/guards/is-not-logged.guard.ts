import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth } from 'src/app/+store';

@Injectable({
  providedIn: 'root'
})
export class IsNotLoggedGuard implements CanActivate {
  constructor(private store: Store, private router: Router) { }
  canActivate(): Observable<boolean> {
    return this.store.select(auth.isLogged()).pipe(map(x => {
      if (!x) { return true; }
      this.router.navigate(['home']);
      return false;
    })
    );
  }
}
