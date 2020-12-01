import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { CreateArticleComponent } from './create-article/create-article.component';
import { ArticleComponent } from './article/article.component';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';
import { CategoryListComponent } from './category-list/category-list.component';
//import { IsLoggedGuard } from '../core/guards/is-logged.guard';
//import { IsAdminGuard } from '../core/guards/is-admin.guard';



@NgModule({
  declarations: [CreateArticleComponent, ArticleComponent, DetailsArticleComponent, EditArticleComponent, DeleteArticleComponent, CategoryListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'create',
        component: CreateArticleComponent,
        //canActivate: [IsAdminGuard]
      },
      {
        path: 'edit/:id',
        component: EditArticleComponent,
        //canActivate: [IsAdminGuard]
      },
      {
        path: 'details/:id',
        component: DetailsArticleComponent
      },
      {
        path: 'delete/:id',
        component: DeleteArticleComponent,
        //canActivate: [IsAdminGuard]
      },
      {
        path: 'category/:name',
        component: CategoryListComponent
      }
    ])
  ],
  exports: [ArticleComponent]
})
export class ArticlesModule { }
