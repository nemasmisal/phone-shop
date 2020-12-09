import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { aside } from 'src/app/+store/';
import { INewestArticles } from 'src/app/core/models';
import { getNewest } from 'src/app/+store/aside/action';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  newestArticles$: Observable<INewestArticles>;
  constructor(private store: Store) {
    this.newestArticles$ = this.store.select(aside.newest);
  }

  ngOnInit(): void {
    this.store.dispatch(getNewest())
  }
}
