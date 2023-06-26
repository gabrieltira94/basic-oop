import Laptop from "./Laptop";

export default class Windows extends Laptop {
  startOperatingSystem(): void {
    console.log("Starting Operating System for Windows..");
  }
}
