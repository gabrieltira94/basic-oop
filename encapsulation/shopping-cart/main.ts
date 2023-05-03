import Product from "./Product";
import ShoppingCart from "./ShoppingCart";

const mango = new Product('mango', 1.99);
const oats = new Product('oats', 0.65);
const honey = new Product('honey', 4.18);

const userCart = new ShoppingCart();

userCart.add(mango);
userCart.add(oats);
userCart.add(oats);

const allProducts = userCart.getAll();
console.log(allProducts);

const totalPrice = userCart.getTotalPrice();
console.log({ totalPrice });

// Unable to modify price directly, uncomment to see the error
// mango.price = 1.0;