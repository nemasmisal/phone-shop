import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IOrder } from 'src/app/core/models';
import { admin } from 'src/app/+store';
import { getOrders, aproveOrder } from 'src/app/+store/admin/actions';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders$: Observable<IOrder[]>;
  constructor(private store: Store) {
    this.orders$ = store.select(admin.orders);
  }

  ngOnInit(): void {
    this.store.dispatch(getOrders());
  }

  aproveOrder(orderId: string) {
    this.store.dispatch(aproveOrder({ orderId }));
  }
}
