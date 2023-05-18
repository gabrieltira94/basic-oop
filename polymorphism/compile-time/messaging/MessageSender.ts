/**
 * This example will throw 'Duplicate function implementation' error,
 * because JavaScript doesn't support method overloading, and when TypeScript
 * would compile the code, all methods will have the same signature.
 * 
 * This this is valid in a strong-typed language
 */

export default class MessageSender {
  /* @ts-ignore */
  sendMessage(recipient: string, message: string): void {
    // Logic to send a message to a single recipient
    console.log(`Sending message to ${recipient}: ${message}`);
  }

  /* @ts-ignore */
  sendMessage(recipients: string[], message: string): void {
    // Logic to send a message to multiple recipients
    recipients.forEach((recipient) => {
      console.log(`Sending message to ${recipient}: ${message}`);
    });
  }

  /* @ts-ignore */
  sendMessage(group: string, message: string): void {
    // Logic to send a message to a group of recipients
    console.log(`Sending message to group ${group}: ${message}`);
  }
}