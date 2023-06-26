import Laptop from "./Laptop";

export default class Linux extends Laptop {
  startOperatingSystem(): void {
    console.log("Starting Operating System for Linux..");
  }
}
