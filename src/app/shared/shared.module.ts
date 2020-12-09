import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { UserModule } from '../user/user.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as asideReducer from 'src/app/+store/aside/reducer';
import { AsideEffects } from 'src/app/+store/aside/effects'


@NgModule({
  declarations: [FooterComponent, NavbarComponent, AsideComponent],
  imports: [
    CommonModule,
    RouterModule,
    UserModule,
    StoreModule.forFeature(asideReducer.featureKey, asideReducer.reducer),
    EffectsModule.forFeature([AsideEffects]),
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    AsideComponent
  ]
})
export class SharedModule { }
