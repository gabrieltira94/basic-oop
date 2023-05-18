import Shape from "./Shape";

export default class Square extends Shape {
  constructor(private sideLength: number) {
    super();
  }

  calculateArea(): number {
    return this.sideLength * this.sideLength;
  }
}
