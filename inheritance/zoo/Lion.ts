import Animal from "./Animal";

export default class Lion extends Animal {
  roar() {
    console.log(`${this.name} is roaring! 🦁`);
  }
}