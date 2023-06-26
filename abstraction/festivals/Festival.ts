export default abstract class Festival {
  protected artists: string[] = [];
  protected lineup: string[] = [];
  protected tickets: number = 0;

  constructor(public name: string, public location: string) { }

  abstract getPeriod(): void;

  abstract registerTicket(name: string): void;

  abstract getTicketPrice(): number;

  abstract showLineup(): void;

  getProfit(): number {
    return this.getTicketPrice() * this.tickets;
  }

  registerArtist(name: string, day: number, hour: string): void {
    this.artists.push(name);
    this.lineup.push(`${name}, on day ${day}, will rock at ${hour}`);
  }
}