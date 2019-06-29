import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-article-viewer',
  templateUrl: './article-viewer.component.html',
  styleUrls: ['./article-viewer.component.scss']
})
export class ArticleViewerComponent implements OnInit {

  public articles$: Observable<Article[]>;

  public articles: Article[];
  public currentArticleUrl: string
  public currentArticle: Article;

  constructor(
    public route: ActivatedRoute,
    public articleService: ArticleService,
  ) { 
  
    this.route.params.subscribe(params => {
      this.currentArticleUrl = params.id;
      this.updateCurrentArticle();
    });

    this.articleService.getArticles().subscribe(
      result => {
        this.articles = result;
        this.updateCurrentArticle();
      }
    );
  }

  ngOnInit() {
    this.articleService.fetchArticles();
  }

  //TODO: Test
  public updateCurrentArticle(){

    //We can't do anything if we don't have our articles yet.
    if(!this.articles){ return; }

    this.currentArticle = this.articles.find(
      article => article.url === this.currentArticleUrl
    )
  }

}
