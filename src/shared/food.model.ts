export class Food {
  constructor(
    public name: string,
    public number: number,
    public price: number,
    public imageUrl: string,
  ) {}

  getTotal() {
    return this.number * this.price;
  }
}
