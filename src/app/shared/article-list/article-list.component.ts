import { Component, OnInit, Input } from '@angular/core';
import { MockData } from 'src/app/mock/mockData';
import { ArticleAdapter, Article } from 'src/app/core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  @Input() articles: Article[];

  constructor(
    public articleService: ArticleService,
  ) {
  }

  ngOnInit() {

  }

  public getBackgroundStyle(article: Article){
    debugger;
    return {
      'background-image': `url('${article.urlToImage}')`
    };
  }

}
