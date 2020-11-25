import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BasketComponent } from './basket/basket.component';
import { FavoritesComponent } from './favorites/favorites.component';



@NgModule({
  declarations: [RegisterComponent, LoginComponent, ProfileComponent, BasketComponent, FavoritesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'profile/:id',
        component: ProfileComponent
      },
      {
        path: 'basket',
        component: BasketComponent
      },
      {
        path: 'favorites',
        component: FavoritesComponent
      }
    ])
  ]
})
export class UserModule { }
