import Animal from "./Animal";

export default class Giraffe extends Animal {
  neckStretch() {
    console.log(`${this.name} is stretching its neck! 🦒`);
  }
}