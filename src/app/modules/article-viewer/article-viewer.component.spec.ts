import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleViewerComponent } from './article-viewer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { mockArticle } from 'src/app/mock/mockArticles';
import { Subject } from 'rxjs';

describe('ArticleViewerComponent', () => {
  let component: ArticleViewerComponent;
  let fixture: ComponentFixture<ArticleViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleViewerComponent ],
      imports: [
        SharedModule,
        HttpClientTestingModule, //REVIEW: We shouldn't need this.
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a current article', ()=>{

    expect(component.currentArticle).toBeFalsy();

    component.updateCurrentArticle();
    expect(component.currentArticle).toBeFalsy();

    component.articles = [ mockArticle ];
    component.updateCurrentArticle();
    expect(component.currentArticle).toBeFalsy();

    component.selectedArticleUrl = mockArticle.url;
    component.updateCurrentArticle();
    expect(component.currentArticle).toBeTruthy();
  });

  it('should toogle the sidenav', ()=>{
    expect(component.sidenavOpen).toBe(false);
    component.toggleSidenav();
    expect(component.sidenavOpen).toBe(true);
  });
});
