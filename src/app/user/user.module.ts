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
import { IsNotLoggedGuard } from '../core/guards/is-not-logged.guard';
import { UserEffects } from '../+store/user/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as userReducer from 'src/app/+store/user/reducer';


@NgModule({
  declarations: [RegisterComponent, LoginComponent, ProfileComponent, BasketComponent, FavoritesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(userReducer.featureKey, userReducer.reducer),
    EffectsModule.forFeature([UserEffects]),
    RouterModule.forChild([
      {
        path: 'register',
        component: RegisterComponent,
        canActivateChild: [IsNotLoggedGuard]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [IsNotLoggedGuard]

      },
      {
        path: 'profile/:id',
        component: ProfileComponent,
        canActivate: [IsLoggedGuard]
      },
      {
        path: 'basket',
        component: BasketComponent,
        canActivate: [IsLoggedGuard]

      },
      {
        path: 'favorites',
        component: FavoritesComponent,
        canActivate: [IsLoggedGuard]

      }
    ])
  ]
})
export class UserModule { }
