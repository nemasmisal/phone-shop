import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'
import { IOrder, IHistory } from '../models';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient, private router: Router) { }

  getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(apiURL + '/admin/orders');
  }

  getHistoryOrders() {
    return this.http.get<IHistory[]>(apiURL + '/admin/historyOrders');
  }

  aproveOrder(orderId: string) {
    return this.http.get(apiURL + `/admin/orders/aprove/${orderId}`).subscribe(() => {
      this.router.navigate(['home']);
    }, err => console.error(err));
  }
}
