import Employee from "./Employee";

export default class Developer extends Employee {
    constructor(name: string, age: number, private programmingLanguage: string) {
        super(name, age);
    }

    code() {
        console.log(`${this.name} is coding in ${this.programmingLanguage}.`);
    }
}