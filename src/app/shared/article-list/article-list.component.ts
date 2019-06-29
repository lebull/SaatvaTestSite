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
  @Input() selectedArticleUrl: string;

  constructor(
    public articleService: ArticleService,
  ) {
  }

  ngOnInit() {

  }

  public getBackgroundStyle(article: Article){

    let conditionalStyle = {}

    if(this.selectedArticleUrl === article.url){

      //https://css-tricks.com/tinted-images-multiple-backgrounds/
      //This needs to get refactored, ideally to boot it out of the controller.
      conditionalStyle = {
        'background-image': ` linear-gradient(
                                rgba(0, 0, 0, 0.45), 
                                rgba(0, 0, 0, 0.45)
                              ),
                              url('${article.urlToImage}')`,
      };
    }

    return conditionalStyle;

  }

}
