import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { OrdersComponent } from './orders/orders.component';
import { HistoryOrdersComponent } from './history-orders/history-orders.component';
import { EditUsersComponent } from './edit-users/edit-users.component';



@NgModule({
  declarations: [AdminComponent, EditUsersComponent, HistoryOrdersComponent, OrdersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
        path: 'users',
        component: AdminComponent
      },
      {
        path: 'edit/:id',
        component: EditUsersComponent
      }
    ])
  ]
})
export class AdminModule { }
