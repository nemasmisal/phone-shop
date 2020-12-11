import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from 'src/app/+store/user/effects';
import * as userReducer from 'src/app/+store/user/reducer';

import { ProfileComponent } from './profile/profile.component';
import { BasketComponent } from './basket/basket.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [ProfileComponent, BasketComponent, FavoritesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(userReducer.featureKey, userReducer.reducer),
    EffectsModule.forFeature([UserEffects]),
    RouterModule.forChild([
      {
        path: 'profile/:id',
        component: ProfileComponent,
      },
      {
        path: 'basket',
        component: BasketComponent,
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
      }
    ])
  ]
})
export class UserModule { }
