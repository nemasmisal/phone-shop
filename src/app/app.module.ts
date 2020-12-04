import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './+store/auth/effects';
import { UserEffects } from './+store/user/effects';
import { ArticleEffects } from './+store/article/effects';
import { AdminEffects } from './+store/admin/effects';

import { reducer as authReducer } from './+store/auth/reducer';
import { reducer as userReducer } from './+store/user/reducer';
import { reducer as articleReducer } from './+store/article/reducer';
import { reducer as adminReducer } from './+store/admin/reducer';

import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { ArticlesModule } from './articles/articles.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { JwtInterceptorService } from './core/services/jwt-interceptor.service';
import { ResponseHandlerInterceptorService } from './core/services/response-handler-interceptor.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


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
    StoreModule.forRoot({ auth: authReducer, user: userReducer, article: articleReducer, admin: adminReducer }),
    EffectsModule.forRoot([AuthEffects, UserEffects, ArticleEffects, AdminEffects]),
    AppRoutingModule,
    FormsModule,
    UserModule,
    ArticlesModule,
    CoreModule,
    SharedModule,
    AdminModule,
    StoreDevtoolsModule.instrument({})

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseHandlerInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
