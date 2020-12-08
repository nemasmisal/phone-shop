import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { ArticlesModule } from './articles/articles.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { JwtInterceptorService } from './core/services/jwt-interceptor.service';
import { ResponseHandlerInterceptorService } from './core/services/response-handler-interceptor.service';
import { reducer as authReducer } from './+store/auth/reducer';
import { AuthEffects } from './+store/auth/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    StoreModule.forRoot({ 'auth': authReducer }),
    EffectsModule.forRoot([AuthEffects]),
    AppRoutingModule,
    AuthModule,
    ArticlesModule,
    AdminModule,
    CoreModule,
    SharedModule,
    StoreDevtoolsModule.instrument({})
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseHandlerInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }