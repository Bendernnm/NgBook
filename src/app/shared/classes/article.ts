export class Article {
  title: string;
  link: string;
  points: number;

  constructor(title: string, link: string, points?: number) {
    this.title = title;
    this.link = link;
    this.points = points || 0;
  }

  like() {
    this.points++;
  }

  dislike() {
    this.points--;
  }

  domain(): string {
    const domain: string = this.link.split('//')[1] || this.link;

    return domain.split('/')[0];
  }
}
