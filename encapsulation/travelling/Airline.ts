import Client from "./Client";

export default class Airline {
  private clients: Client[] = [];

  constructor(public name: string) { }

  bookFlight(client: Client) {
    this.clients.push(client);

    console.log(`Booked a flight for ${client.name}, on seat ${client.seat}!`);
  }

  bookLunchOnFlight(name: string) {
    try {
      this.findClient(name).addLunch();

      console.log(`lunch booked for ${name}!`);
    }
    catch (error) {
      console.log(`Cannot add lunch! ${error}`);
    }
  }

  bookExtraLuggage(name: string) {
    try {
      this.findClient(name).addExtraLuggage();

      console.log(`Extra luggage booked for ${name}!`);
    }
    catch (error) {
      console.log(`Cannot add lunch! ${error}`);
    }
  }

  getClientsDetails() {
    this.clients.forEach(client => console.log(client.getDetails()));
  }

  getClientDetails(name: string) {
    try {
      const client = this.findClient(name);

      console.log(client.getDetails());
    }
    catch (error) {
      console.log(`Cannot get details! ${error}`);
    }
  }

  private findClient(name: string) {
    const client = this.clients.find(c => c.name === name);

    if (!client)
      throw new Error(`${name} doesn\'t have a flight ticket.`);

    return client;
  }
}