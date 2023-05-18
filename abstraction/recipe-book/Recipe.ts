export default abstract class Recipe {
  constructor(public name: string, public description: string) { }

  abstract cook(): void;
}
