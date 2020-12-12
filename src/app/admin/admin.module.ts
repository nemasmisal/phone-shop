import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import { OrdersComponent } from './orders/orders.component';
import { HistoryOrdersComponent } from './history-orders/history-orders.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { AdminEffects } from '../+store/admin/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as adminReducer from '../+store/admin/reducer';

@NgModule({
  declarations: [UsersListComponent, EditUsersComponent, HistoryOrdersComponent, OrdersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AdminEffects]),
    StoreModule.forFeature(adminReducer.featureKey, adminReducer.reducer),
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
        component: UsersListComponent
      },
      {
        path: 'edit/:id',
        component: EditUsersComponent
      }
    ])
  ]
})
export class AdminModule { }
