import Diesel from "./Diesel";
import Gas from "./Gas";
import Gasoline from "./Gasoline";

const gasoline = new Gasoline();
const gas = new Gas();
const diesel = new Diesel();

gasoline.fuel();
gas.fuel();
diesel.fuel();