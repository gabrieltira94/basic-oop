import CakeRecipe from "./CakeRecipe";
import PizzaRecipe from "./PizzaRecipe";
import Recipe from "./Recipe";

// Create instances of recipes
const veganPizza = new PizzaRecipe();
const chocolateCake = new CakeRecipe();

// Create an array to hold recipes
const recipeBook: Recipe[] = [veganPizza, chocolateCake];

// Loop through the recipe book and cook each recipe
recipeBook.forEach(recipe => {
  console.log(`Preparing ${recipe.name}!`);
  recipe.cook();
});
