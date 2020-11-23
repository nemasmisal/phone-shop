import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { CreateArticleComponent } from './create-article/create-article.component';
import { ArticleComponent } from './article/article.component';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';



@NgModule({
  declarations: [CreateArticleComponent, ArticleComponent, DetailsArticleComponent, EditArticleComponent, DeleteArticleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'create',
        component: CreateArticleComponent
      },
      {
        path: 'edit/:id',
        component: EditArticleComponent
      },
      {
        path: 'details/:id',
        component: DetailsArticleComponent
      },
      {
        path: 'delete/:id',
        component: DeleteArticleComponent
      }
    ])
  ],
  exports: [ArticleComponent]
})
export class ArticlesModule { }
