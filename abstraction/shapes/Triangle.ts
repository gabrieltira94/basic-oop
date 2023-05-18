import Shape from "./Shape";

export default class Triangle extends Shape {
  constructor(private base: number, private height: number) {
    super();
  }

  calculateArea(): number {
    return (this.base * this.height) / 2;
  }
}
