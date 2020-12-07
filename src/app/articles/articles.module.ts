import { NgModule } from '@angular/core';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { CreateArticleComponent } from './create-article/create-article.component';
import { ArticleComponent } from './article/article.component';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { IsAdminGuard } from '../core/guards/is-admin.guard';
import { ArticleEffects } from '../+store/article/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as articleReducer from 'src/app/+store/article/reducer';

@NgModule({
  declarations: [CreateArticleComponent, ArticleComponent, DetailsArticleComponent, EditArticleComponent, CategoryListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(articleReducer.featureKey, articleReducer.reducer),
    EffectsModule.forFeature([ArticleEffects]),
    RouterModule.forChild([
      {
        path: 'create',
        component: CreateArticleComponent,
        canActivate: [IsAdminGuard]
      },
      {
        path: 'category/:name/edit/:id',
        component: EditArticleComponent,
        canActivate: [IsAdminGuard]
      },
      {
        path: 'category/:name/details/:id',
        component: DetailsArticleComponent
      },
      {
        path: 'category/:name',
        component: CategoryListComponent
      }
    ])
  ],
})
export class ArticlesModule { }
