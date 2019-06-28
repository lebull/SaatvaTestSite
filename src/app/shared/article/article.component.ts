import { Component, OnInit } from '@angular/core';
import { MockData } from 'src/app/mock/mockData';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ArticleAdapter, Article } from 'src/app/core/models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public article:Article = new ArticleAdapter().decode(MockData.articles[0]);
  public description = MockData.articles[0].long_description;

  constructor(
  ) {}

  ngOnInit() {
  }

}
