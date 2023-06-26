import Festival from "./Festival";

export default class Nostalgia extends Festival {
  constructor() {
    super('Nostalgia 2023', 'Bucharest');
  }

  getPeriod(): void {
    console.log('We are waiting for you this year between June 30 and 3rd of July!');
  }

  registerTicket(name: string): void {
    console.log(`${name} has just registered to Nostalgia!`);
    this.tickets++;
  }

  getTicketPrice(): number {
    return 100;
  }

  showLineup(): void {
    console.log('------------------ NOSTALGIA LINEUP ------------------');

    this.lineup.forEach(line => console.log(line));

    console.log('------------------------------------------------------');
  }
}
