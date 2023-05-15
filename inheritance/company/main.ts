import Designer from "./Designer";
import Developer from "./Developer";
import Manager from "./Manager";

// Usage
const manager = new Manager("John", 35, "Marketing");
manager.work();
manager.manageTeam();

const developer = new Developer("Alice", 28, "JavaScript");
developer.work();
developer.code();

const designer = new Designer("Emily", 32, "Photoshop");
designer.work();
designer.design();