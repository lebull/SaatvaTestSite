import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ArticleComponent, 
    ArticleListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports:[
    ArticleComponent,
    ArticleListComponent,
  ]
})
export class SharedModule { }
