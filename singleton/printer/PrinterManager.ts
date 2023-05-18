export default class PrinterManager {
  private static instance: PrinterManager;

  // Private constructor to prevent direct instantiation
  private constructor() { }

  static getInstance(): PrinterManager {
    if (PrinterManager.instance)
      return PrinterManager.instance;

    return new PrinterManager();
  }

  print(document: string): void {
    // Logic to print the document
    console.log(`Printing: ${document}`);
  }
}