import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { ToastrModule } from 'ngx-toastr';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer as authReducer } from 'src/app/+store/auth/reducer';
import { reducer as articleReducer } from 'src/app/+store/article/reducer';
import { AuthEffects } from 'src/app/+store/auth/effects';
import { ArticleEffects } from 'src/app/+store/article/effects';

import { AppRoutingModule } from './app-routing.module';
import { ArticlesModule } from './articles/articles.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { JwtInterceptorService } from './core/services/jwt-interceptor.service';
import { ResponseHandlerInterceptorService } from './core/services/response-handler-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-left',
      preventDuplicates: true,
    }),
    StoreModule.forRoot({ 'auth': authReducer, 'article': articleReducer }),
    EffectsModule.forRoot([AuthEffects, ArticleEffects]),
    AppRoutingModule,
    AuthModule,
    ArticlesModule,
    AdminModule,
    CoreModule,
    SharedModule,
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseHandlerInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }