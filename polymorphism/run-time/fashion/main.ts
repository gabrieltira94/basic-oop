import Gucci from "./Gucci";
import LouisVouitton from "./LouisVouitton";
import Zara from "./Zara";

const zara = new Zara();
const gucci = new Gucci();
const louisV = new LouisVouitton();

console.log('~~~~~~~~~~~~~~~ zara ~~~~~~~~~~~~~~~');
zara.getFabric();
zara.getSleeveDetails();
zara.zipDown();
zara.zipUp();

console.log('\n\n');


console.log('~~~~~~~~~~~~~~~ gucci ~~~~~~~~~~~~~~~');
gucci.getFabric();
gucci.getSleeveDetails();
gucci.zipDown();
gucci.zipUp();

console.log('\n\n');


console.log('~~~~~~~~~~~~~~~ louisV ~~~~~~~~~~~~~~~');
louisV.getFabric();
louisV.getSleeveDetails();
louisV.zipDown();
louisV.zipUp();

console.log('\n\n');