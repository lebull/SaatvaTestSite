import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ArticleService = TestBed.get(ArticleService);
    expect(service).toBeTruthy();
  });

  it
});
