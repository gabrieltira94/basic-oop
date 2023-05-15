import Elephant from "./Elephant";
import Giraffe from "./Giraffe";
import Lion from "./Lion";

const lion = new Lion("Simba", 5);
lion.eat();
lion.sleep();
lion.move();
lion.roar();

const elephant = new Elephant("Dumbo", 10);
elephant.eat();
elephant.sleep();
elephant.move();
elephant.trumpeting();

const giraffe = new Giraffe("Melman", 7);
giraffe.eat();
giraffe.sleep();
giraffe.move();
giraffe.neckStretch();
