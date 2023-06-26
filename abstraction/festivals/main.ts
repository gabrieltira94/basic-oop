import ElectricCastle from "./ElectricCastle";
import Nostalgia from "./Nostalgia";

const nostalgia = new Nostalgia();
const electricCastle = new ElectricCastle();

nostalgia.registerArtist('Voltaj', 2, '18:40');
nostalgia.registerArtist('ASIA', 2, '20:00');
nostalgia.registerArtist('Vali Vijelie', 1, '01:00');

electricCastle.registerArtist('Twenty one pilots', 2, '21:45');
electricCastle.registerArtist('Gorillaz', 2, '02:20');
electricCastle.registerArtist('Delia', 2, '19:30');


nostalgia.registerTicket('Radu');
nostalgia.registerTicket('Alex');
nostalgia.registerTicket('Irina');
nostalgia.registerTicket('Alina');
nostalgia.registerTicket('Marin');
nostalgia.registerTicket('Johnny');
nostalgia.registerTicket('Catalin');


electricCastle.registerTicket('Alex');
electricCastle.registerTicket('Radu');
electricCastle.registerTicket('Catalin');
electricCastle.registerTicket('Sebi');
electricCastle.registerTicket('Camelia');
electricCastle.registerTicket('Alina');
electricCastle.registerTicket('Irina');
electricCastle.registerTicket('Johnny');
electricCastle.registerTicket('Marin');


console.log('\n');
electricCastle.showClients();

console.log('\n\n');
// Period
nostalgia.getPeriod();
electricCastle.getPeriod();

console.log('\n\n');
// Lineup
nostalgia.showLineup();
electricCastle.showLineup();