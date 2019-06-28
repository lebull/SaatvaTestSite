import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Article, ArticleAdapter } from '../models/article';
import { MockData } from 'src/app/mock/mockData';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public articleAdapter = new ArticleAdapter();


  articles$: Subject<Article[]> = new Subject<Article[]>();

  constructor() {}

  /**
   * Returns an observable of an array of articles
   */
  public getArticles(): Observable<Article[]>{ 
    return this.articles$ as Observable<Article[]>;
  }

  public fetchArticles(){
    this.articles$.next(MockData.articles.map(
      article => this.articleAdapter.decode(article)
    ));
  }
}
