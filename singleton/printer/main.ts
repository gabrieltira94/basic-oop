import PrinterManager from "./PrinterManager";

// Usage:
const printerManager1 = PrinterManager.getInstance();
const printerManager2 = PrinterManager.getInstance();

console.log(printerManager1 === printerManager2); // Output: true => meaning the same printer connection is going to be used
printerManager1.print("Sample Document"); // Output: Printing: Sample Document