import Recipe from "./Recipe";

export default class PizzaRecipe extends Recipe {
  constructor() {
    super("Vegan Pizza", "High protein, healthy dish");
  }

  cook(): void {
    console.log("Cooking Vegan Pizza..");
    // Implementation details for cooking Vegan Pizza
  }
}
