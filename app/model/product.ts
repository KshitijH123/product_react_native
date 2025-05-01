export default class Product {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;

  constructor(name: string, price: number, quantity: number, imageUrl: string) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.imageUrl = imageUrl;
  }
}
