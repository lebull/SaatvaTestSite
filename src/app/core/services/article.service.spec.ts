import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Article } from '../models/article';

describe('ArticlesService', () => {

  let httpClient: HttpClient;
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    //service = TestBed.get(CustomHttpService);
    service = TestBed.get(ArticleService);
    httpClient = TestBed.get(HttpTestingController);
  });


  it('should be created', () => {
    const service: ArticleService = TestBed.get(ArticleService);
    expect(service).toBeTruthy();
  });

  it('should have an observable that emits articles', ()=>{
    expect(service.getArticles()).toBeTruthy();
  });

  it('should call the requried url', () => {

    let returnSubject = new Subject<any>();
    let callReturn = {articles: ["dummy"]};
    let dummyArticle = new Article("author", "title", "description", "long_description", "url", "urlToImage", new Date())

    let callSpy = spyOn(service.http, 'get').and.returnValue(returnSubject);
    let adaptSpy = spyOn(service.articleAdapter, 'decode').and.returnValue(dummyArticle);

    service.getArticles().subscribe(actualReturn => {
      expect(actualReturn[0]).toBe(dummyArticle); 
    });

    service.fetchArticles();
    returnSubject.next(callReturn);

    expect(callSpy).toHaveBeenCalled();

  });
});
