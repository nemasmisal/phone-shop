import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './articles/article/article.component';
import { IsAdminGuard } from './core/guards/is-admin.guard';
import { IsLoggedGuard } from './core/guards/is-logged.guard';
import { IsNotLoggedGuard } from './core/guards/is-not-logged.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'

  },
  {
    path: 'home',
    pathMatch: 'full',
    component: ArticleComponent
  },
  {
    path: 'article',
    loadChildren: './articles/articles.module#ArticlesModule'
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
    canActivate: [IsLoggedGuard]
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    canActivate: [IsNotLoggedGuard]
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [IsAdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
