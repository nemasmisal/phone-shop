import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { HistoryOrdersComponent } from './history-orders/history-orders.component';
import { EditUsersComponent } from './edit-users/edit-users.component';



@NgModule({
  declarations: [AdminComponent, EditUsersComponent, HistoryOrdersComponent, OrdersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'historyOrders',
        component: HistoryOrdersComponent
      },
      {
        path: 'editUsers',
        component: EditUsersComponent
      }
    ])
  ]
})
export class AdminModule { }
