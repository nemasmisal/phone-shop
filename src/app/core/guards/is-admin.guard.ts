import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth } from 'src/app/+store';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  canContinue$: Observable<boolean>;
  constructor(private store: Store, private router: Router) { }
  canActivate(): Observable<boolean> {
    return this.store.select(auth.admin).pipe(map(x => {
      if (x) { return true; }
      this.router.navigate(['home']);
      return false;
    })
    );
  }
}
