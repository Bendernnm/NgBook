import {Component, Input, OnInit} from '@angular/core';

import {Article} from '../shared';

@Component({
  selector   : 'app-article',
  templateUrl: './article.component.html',
  styleUrls  : ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  private article: Article;

  constructor() {
  }

  ngOnInit() {
  }

  addPoint() {
    this.article.like();
  }

  minusPoint() {
    this.article.dislike();
  }

}
