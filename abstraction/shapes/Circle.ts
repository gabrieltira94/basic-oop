import Shape from "./Shape";

export default class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
