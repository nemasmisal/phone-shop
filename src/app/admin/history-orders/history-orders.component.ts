import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IHistory } from '../../core/models';
import * as admin from 'src/app/+store';
import { getHistoryOrders } from 'src/app/+store/admin/actions';

@Component({
  selector: 'app-history-orders',
  templateUrl: './history-orders.component.html',
  styleUrls: ['./history-orders.component.css']
})
export class HistoryOrdersComponent implements OnInit {
  historyOrders$: Observable<IHistory[]>;
  constructor(private store: Store) {
    this.historyOrders$ = store.select(admin.getHistoryOrders);
   }

  ngOnInit(): void {
    this.store.dispatch(getHistoryOrders());
  }

}
