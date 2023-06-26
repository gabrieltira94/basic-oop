export default class Bar {
  constructor(private name: string, private hours: string, private location: string) { }

  getOpeningHours() {
    console.log(`${this.name} is open between ${this.hours}`);
  }

  getLocation() {
    console.log(`Find ${this.name} at ${this.location}`);
  }
}