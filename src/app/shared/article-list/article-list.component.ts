import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  @Input() articles: Article[];
  @Input() selectedArticleUrl: string;
  @Input() opened: boolean;
  
  constructor(
    public articleService: ArticleService,
  ) {
  }

  ngOnInit() {

  }

  //REVIEW:  I guess it makes sense to use the router to pick active links, but this isn't so bad.
  public getBackgroundStyle(article: Article){

    let conditionalStyle = {}

    if(this.selectedArticleUrl === article.url){

      //https://css-tricks.com/tinted-images-multiple-backgrounds/
      //This needs to get refactored, ideally to boot it out of the controller.
      conditionalStyle = {
        'background-image': 
          ` linear-gradient(
              rgba(63, 63, 63, 0.6), 
              rgba(63, 63, 63, 0.6)
            ),
            url('${article.urlToImage}')`,
      };
    }

    return conditionalStyle;
  }



}
