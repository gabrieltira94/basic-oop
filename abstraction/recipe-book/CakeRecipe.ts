import Recipe from "./Recipe";

export default class CakeRecipe extends Recipe {
  constructor() {
    super("Chocolate Cake", "Decadent chocolate dessert");
  }

  cook(): void {
    console.log("Baking a Chocolate Cake...");
    // Implementation details for baking a Chocolate Cake
  }
}