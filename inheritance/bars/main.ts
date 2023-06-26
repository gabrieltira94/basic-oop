import Bamboo from "./Bamboo";
import HardRockCaffe from "./HardRockCaffe";

const bamboo = new Bamboo('Bamboo', '22:00 - 04:30', 'Lacul Tei');
const hardRock = new HardRockCaffe('hard Rock Caffe', '12:00 - 01:00', 'Herastrau');

// bamboo specific
bamboo.getDrinks();

console.log('\n\n');

// hardRock specific
hardRock.getMenu();
hardRock.getSlogan();

console.log('\n\n');

// common
bamboo.getLocation();
bamboo.getOpeningHours();
hardRock.getLocation();
hardRock.getOpeningHours();
