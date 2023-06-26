import Jacket from "./Jacket";

export default class Gucci extends Jacket {
  zipUp() {
    console.log('Wear Gucci is just perfect, no need to zip up');
  }

  zipDown() {
    console.log('Wear Gucci is just perfect, no need to zip down');
  }

  getFabric() {
    console.log('Top secret Gucci\'s fabric');
  }

  getSleeveDetails() {
    console.log('Depends how I wake up in the morning');
  }
}
