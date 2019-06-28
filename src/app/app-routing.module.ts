import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleViewerComponent } from './modules/article-viewer/article-viewer.component';

const routes: Routes = [
    { path: '', component: ArticleViewerComponent},
    { path: 'article/:id', component: ArticleViewerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
