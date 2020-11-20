import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonesComponent } from './phones/phones.component';
import { CasesComponent } from './cases/cases.component';
import { ScreenProtectorsComponent } from './screen-protectors/screen-protectors.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { CreateArticleComponent } from './create-article/create-article.component';



@NgModule({
  declarations: [PhonesComponent, CasesComponent, ScreenProtectorsComponent, AccessoriesComponent, CreateArticleComponent],
  imports: [
    CommonModule
  ]
})
export class ArticlesModule { }
