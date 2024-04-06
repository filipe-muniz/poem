export class Poem {
  constructor(id: number, title: string, poem: string, poet_id: number) {
    this.id = id;
    this.title = title;
    this.poem = poem;
    this.poet_id = poet_id;
  }

  public id: number;
  public title: string;
  public poem: string;
  public poet_id: number;
}
