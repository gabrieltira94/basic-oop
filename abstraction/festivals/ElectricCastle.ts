import Festival from "./Festival";

export default class ElectricCastle extends Festival {
  private clients: string[] = [];

  constructor() {
    super('Electric Castle', 'Somewhere nearby Cluj');
  }

  getPeriod(): void {
    console.log('Let \'s get electro 5 days in a row starting on 26 June');
  }

  getTicketPrice(): number {
    return 150;
  }

  showClients() {
    this.clients.forEach(client => console.log(`${client} is already waiting for Electric Castle!`));
  }

  registerTicket(name: string): void {
    this.clients.push(name);
    this.tickets++;
  }

  showLineup(): void {
    console.log('~~~~~~~~~~~~~~~~~~~~ Electric Castle Lineup ~~~~~~~~~~~~~~~~~~~~~');

    this.lineup.forEach(line => console.log(line));

    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  }
}
