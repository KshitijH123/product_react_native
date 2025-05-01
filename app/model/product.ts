export default class Product {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;

  constructor(name: string, price: number, imageUrl: string, quantity: number = 0) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.quantity = quantity;
  }
}
