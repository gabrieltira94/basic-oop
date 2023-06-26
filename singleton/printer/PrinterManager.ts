export default class PrinterManager {
  private static instance: PrinterManager;

  // Private constructor to prevent direct instantiation
  private constructor() { }

  static getInstance(): PrinterManager {
    if (!PrinterManager.instance)
      this.instance = new PrinterManager();

    return PrinterManager.instance;
  }

  print(document: string): void {
    // Logic to print the document
    console.log(`Printing: ${document}`);
  }
}