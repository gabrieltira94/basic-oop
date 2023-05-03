export default class CoffeeMachine {
  private beans: number = 0;
  private water: number = 0;

  addBeans(amount: number) {
    if (this.isAmountValid(amount))
      this.beans += amount;
  }

  addWater(amount: number) {
    if (this.isAmountValid(amount))
      this.water += amount;
  }

  makeCoffee() {
    if (this.beans < 1)
      return console.log("Please add more beans to make a coffee!");
    if (this.water < 1)
      return console.log("Please add more water to make a coffee!");

    this.beans--;
    this.water--;

    console.log("Here's your coffee!");
  }

  private isAmountValid(amount: number) {
    if (amount < 0) {
      console.log('Amount should be a positive number');

      return false;
    }

    return true;
  }
}