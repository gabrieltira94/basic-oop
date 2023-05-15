import Animal from "./Animal";

export default class Elephant extends Animal {
    trumpeting() {
        console.log(`${this.name} is trumpeting! 🐘`);
    }
}