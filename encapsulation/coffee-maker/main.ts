import CoffeeMachine from "./CoffeeMachine";

const coffeeMachine = new CoffeeMachine();

coffeeMachine.addBeans(2);
coffeeMachine.addWater(1);


/**
 * As we can see, the user can call makeCoffee() method, but encapsulation validates
 * if there are enough beans and water before procceeding
 */
coffeeMachine.makeCoffee();
coffeeMachine.makeCoffee();

coffeeMachine.addBeans(-3);