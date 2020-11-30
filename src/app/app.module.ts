import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'
import { AuthEffects } from './+store/auth/effects'
import { reducer } from './+store/auth/reducer'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { ArticlesModule } from './articles/articles.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { JwtInterceptorService } from './core/services/jwt-interceptor.service';
import { AdminModule } from './admin/admin.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ auth: reducer }),
    EffectsModule.forRoot([AuthEffects]),
    AppRoutingModule,
    FormsModule,
    UserModule,
    ArticlesModule,
    CoreModule,
    SharedModule,
    AdminModule,
    StoreDevtoolsModule.instrument({})

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
