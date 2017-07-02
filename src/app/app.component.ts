import {Component, OnInit} from '@angular/core';
import {Article} from './shared';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent implements OnInit {

  private articles: Array<Article> = [];

  constructor() {
    this.articles = [
      new Article('Angular 2', 'https://angular.io/', 6),
      new Article('React', 'https://facebook.github.io/react/', 3),
      new Article('Vue', 'https://vuejs.org/', 4)
    ];
  }

  ngOnInit(): void {
  }

  addArticle(titleInput: HTMLInputElement, linkInput: HTMLInputElement): void {
    const newArticle = new Article(titleInput.value, linkInput.value);

    this.articles.push(newArticle);

    titleInput.value = '';
    linkInput.value = '';
  }

  sortedArticles(): Array<Article> {
    return this.articles.sort(
      (firstArticle: Article, secondArticle: Article) => secondArticle.points - firstArticle.points
    );
  }

}
