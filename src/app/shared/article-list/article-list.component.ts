import { Component, OnInit } from '@angular/core';
import { MockData } from 'src/app/mock/mockData';
import { ArticleAdapter, Article } from 'src/app/core/models/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  public articles: Article[] = MockData.articles.map(article=> new ArticleAdapter().decode(article));

  constructor() {

   }

  ngOnInit() {
  }

}
