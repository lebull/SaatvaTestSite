import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Article, ArticleAdapter } from '../models/article';
import { MockData } from 'src/app/mock/mockData';
import { HttpClient } from  "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public articleAdapter = new ArticleAdapter();


  articles$: Subject<Article[]> = new Subject<Article[]>();

  constructor(
    public http: HttpClient
  ) {}

  /**
   * Returns an observable of an array of articles
   */
  public getArticles(): Observable<Article[]>{ 
    return this.articles$ as Observable<Article[]>;
  }

  public fetchArticles(){

    this.http.get('https://s3-us-west-2.amazonaws.com/saatva-hiring/news.json').pipe(
      tap( (result:any) =>     
        this.articles$.next(result.articles.map(
          article => this.articleAdapter.decode(article)
        ))
      )
    ).subscribe();  


  }
}
