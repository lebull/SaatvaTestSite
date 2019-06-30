import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListComponent } from './article-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Article } from 'src/app/core/models/article';
import { mockArticle } from 'src/app/mock/mockArticles';

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleListComponent ],
      imports: [ 
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a background style for all links', ()=>{
    component.selectedArticleUrl = "url";
    expect(Object.keys(component.getBackgroundStyle(mockArticle)).length).toBeGreaterThan(0);
    expect(component.getBackgroundStyle(mockArticle)['background-image']).toBeTruthy();
  });
});
