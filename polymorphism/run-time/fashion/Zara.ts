import Jacket from "./Jacket";

export default class Zara extends Jacket {
  zipUp() {
    console.log('Too windy, zipping up in Zara style');
  }

  zipDown() {
    console.log('Feels warm, in Zara style, let\'s zip down');
  }
}
