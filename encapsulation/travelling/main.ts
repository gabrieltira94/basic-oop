import Airline from "./Airline";
import Client from "./Client";

const flyDubai = new Airline('FlyDubai');

const Alejandro = new Client('Alejandro', '2F');
const Dragos = new Client('Dragos', '18D');
const Alice = new Client('Alice', '13A');
const Ruxi = new Client('Ruxi', '12C');
const Vali = new Client('Vali', '1A');


flyDubai.bookFlight(Alejandro);
flyDubai.bookFlight(Dragos);
flyDubai.bookFlight(Alice);
flyDubai.bookFlight(Ruxi);
flyDubai.bookFlight(Vali);

console.log('\n\n');
flyDubai.bookLunchOnFlight(Dragos.name);
flyDubai.bookLunchOnFlight(Vali.name);
flyDubai.bookLunchOnFlight('Helen');
flyDubai.bookLunchOnFlight(Alice.name);


console.log('\n\n');
flyDubai.bookExtraLuggage(Ruxi.name);
flyDubai.bookExtraLuggage(Alejandro.name);
flyDubai.bookExtraLuggage(Alice.name);
flyDubai.bookExtraLuggage('Gabi');


console.log('\n\n');
flyDubai.getClientDetails(Dragos.name);
flyDubai.getClientDetails('Sandra');

console.log('\n\n');
flyDubai.getClientsDetails();