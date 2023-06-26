import Bar from "./Bar";

export default class HardRockCaffe extends Bar {
  getMenu() {
    console.log(`We have pizza, sausages, burgers, potatoes, beer.`);
  }

  getSlogan() {
    console.log('Ok, learn, work, but let\'s rock!');
  }
}