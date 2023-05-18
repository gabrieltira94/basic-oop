import Employee from "./Employee";

export default class Designer extends Employee {
  constructor(name: string, age: number, private designSoftware: string) {
    super(name, age);
  }

  design() {
    console.log(`${this.name} is designing using ${this.designSoftware}.`);
  }
}