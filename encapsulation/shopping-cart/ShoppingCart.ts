import Product from "./Product";

export default class ShoppingCart {
  private products: Product[] = [];

  add(product: Product): void {
    if (!this.products.includes(product))
      this.products.push(product);
    else
      console.log(`Ops! Product '${product.name}' already added.`);
  }

  remove(product: Product): void {
    this.products = this.products.filter(p => p !== product);
  }

  getAll(): Product[] {
    return [...this.products];
  }

  getTotalPrice(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}
