import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BasketComponent } from './basket/basket.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { IsLoggedGuard } from '../core/guards/is-logged.guard';
//import { IsNotLoggedGuard } from '../core/guards/is-not-logged.guard';



@NgModule({
  declarations: [RegisterComponent, LoginComponent, ProfileComponent, BasketComponent, FavoritesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'register',
        component: RegisterComponent,
        //canActivate: [IsNotLoggedGuard]
      },
      {
        path: 'login',
        component: LoginComponent,
        //canActivate: [IsNotLoggedGuard]

      },
      {
        path: 'profile/:id',
        component: ProfileComponent,
        //canActivate: [IsLoggedGuard]
      },
      {
        path: 'basket',
        component: BasketComponent,
        canActivate: [IsLoggedGuard]

      },
      {
        path: 'favorites',
        component: FavoritesComponent,
        //canActivate: [IsLoggedGuard]

      }
    ])
  ]
})
export class UserModule { }
