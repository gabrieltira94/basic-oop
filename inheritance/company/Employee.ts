export default class Employee {
    constructor(protected name: string, protected age: number) { }

    work() {
        console.log(`${this.name} is working.`);
    }
}