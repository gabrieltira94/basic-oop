export default class Client {
  hasLunch: boolean = false;
  hasExtraLuggage: boolean = false;

  constructor(public name: string, public seat: string) { }

  addLunch() {
    this.hasLunch = true;
  }

  addExtraLuggage() {
    this.hasExtraLuggage = true;
  }

  getDetails(): string {
    let statement: string = `${this.name} has seat ${this.seat}, and`;

    if (this.hasLunch)
      statement += ' has lunch included,';
    else
      statement += ' did not select lunch yet,';

    if (this.hasExtraLuggage)
      statement += ' and also can bring extra luggage.';
    else
      statement += ' and has standard hand luggage.';

    return statement;
  }
}