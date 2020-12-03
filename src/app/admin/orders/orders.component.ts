import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IOrder } from 'src/app/core/models';
import { OrderService } from '../../core/services/order.service';
import * as admin from 'src/app/+store';
import { getOrders } from 'src/app/+store/admin/actions';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders$: Observable<IOrder[]>;
  constructor(private orderService: OrderService, private router: Router, private store: Store) {
    this.orders$ = store.select(admin.getOrders);
   }

  ngOnInit(): void {
    this.store.dispatch(getOrders());
  }

  aproveOrder(orderId: string) {
    this.orderService.aproveOrder(orderId);
    this.router.navigate(['home']);
  }
}
