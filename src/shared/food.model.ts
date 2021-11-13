export class Food {
  constructor(
    public name: string,
    public number: number,
    public price: number,
  ) {}

  getTotal() {
    return this.number * this.price;
  }
}
