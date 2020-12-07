import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IsNotLoggedGuard } from '../core/guards/is-not-logged.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
    ])
  ]
})
export class AuthModule { }
