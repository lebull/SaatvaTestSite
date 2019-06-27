import { Component, OnInit } from '@angular/core';
import { MockData } from 'src/app/mock/mockData';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public article:any = MockData.articles[0];
  public description:SafeHtml = "";

  constructor(
    public sanitizer: DomSanitizer
  ) {
    this.description = this.sanitizer.bypassSecurityTrustHtml(MockData.articles[0].long_description);
  }

  ngOnInit() {
  }

}
