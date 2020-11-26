import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IOrder } from 'src/app/core/models';
import { OrderService } from '../../core/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders$: Observable<IOrder[]>;
  totalAmount: number;
  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.orders$ = this.orderService.getOrders();
  }

  aproveOrder(orderId: string) {
    this.orderService.aproveOrder(orderId);
    this.router.navigate(['home']);
  }
}
