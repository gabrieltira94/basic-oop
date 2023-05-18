export default class Animal {
  constructor(protected name: string, protected age: number) { }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }

  move() {
    console.log(`${this.name} is moving.`);
  }
}
