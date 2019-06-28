import { Component, OnInit, Input } from '@angular/core';
import { MockData } from 'src/app/mock/mockData';
import { ArticleAdapter, Article } from 'src/app/core/models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article:Article;

  constructor(
  ) {}

  ngOnInit() {

  }

}
