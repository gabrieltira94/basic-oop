import Circle from "./Circle";
import Square from "./Square";
import Triangle from "./Triangle";

const circle = new Circle(5);
const square = new Square(4);
const triangle = new Triangle(6, 3);

console.log(circle.calculateArea());
console.log(square.calculateArea());
console.log(triangle.calculateArea()); 