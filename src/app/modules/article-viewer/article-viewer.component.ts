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
  public selectedArticleUrl: string
  public currentArticle: Article;
  public articleActive: boolean;

  constructor(
    public route: ActivatedRoute,
    public articleService: ArticleService,
  ) {}

  //TODO: Test
  ngOnInit() {

    this.route.params.subscribe(params => {

      //If the article params are empty, then we aren't looking at an article.
      //this.currentArticleUrl could be tested directly in the xml, but I feel that would be unreadable.
      this.articleActive = (params.id !== undefined);

      //Curent article id
      this.selectedArticleUrl = params.id;

      this.updateCurrentArticle();
    });

    this.articleService.getArticles().subscribe(
      result => {
        this.articles = result;
        this.updateCurrentArticle();
      }
    );

    this.articleService.fetchArticles();
  }

  //TODO: Test
  public updateCurrentArticle(){

    //We can't do anything if we don't have our articles yet.
    if(!this.articles){ return; }

    this.currentArticle = this.articles.find(
      article => article.url === this.selectedArticleUrl
    )
  }

}
