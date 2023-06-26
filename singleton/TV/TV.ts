export default class TV {
  private static instance: TV;

  // Private constructor to prevent direct instantiation
  private constructor() { }

  static getInstance(): TV {
    if (!TV.instance)
      this.instance = new TV();

    return TV.instance;
  }

  openNetflix() {
    console.log('Now watching Netflix!');
  }

  openAmazonPrime() {
    console.log('Now watching Amazon Prime!');
  }

  openYouTube() {
    console.log('Now watching YouTube!');
  }

  openOnlyFans() {
    console.log('Joking, leave OnlyFans for another time!');
  }
}
