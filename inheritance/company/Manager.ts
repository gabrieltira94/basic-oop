import Employee from "./Employee";

export default class Manager extends Employee {
    constructor(name: string, age: number, private department: string) {
        super(name, age);
    }

    manageTeam() {
        console.log(`${this.name} is managing the ${this.department} team.`);
    }
}