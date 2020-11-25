import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [FooterComponent, NavbarComponent, AsideComponent],
  imports: [
    CommonModule,
    RouterModule,
    UserModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    AsideComponent
  ]
})
export class SharedModule { }
