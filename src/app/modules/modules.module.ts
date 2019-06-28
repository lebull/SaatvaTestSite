import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleViewerComponent } from './article-viewer/article-viewer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ArticleViewerComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [ArticleViewerComponent]
})
export class ModulesModule { }
