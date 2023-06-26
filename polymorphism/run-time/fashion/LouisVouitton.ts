import Jacket from "./Jacket";

export default class LouisVouitton extends Jacket {
  getFabric() {
    console.log('I am made of extra pure goldish fabric');
  }

  getSleeveDetails() {
    console.log('I have custom Luois sleeves');
  }
}
