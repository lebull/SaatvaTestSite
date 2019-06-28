import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  declarations: [
    ArticleComponent, 
    ArticleListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ArticleComponent,
    ArticleListComponent,
  ]
})
export class SharedModule { }
