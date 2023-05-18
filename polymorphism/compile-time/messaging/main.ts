import MessageSender from "./MessageSender";

/**
 * Do not try to run as it won't work, exaplanation in MessageSender class
 */
const sender = new MessageSender();

sender.sendMessage("Alice", "Hello Alice!");
/* @ts-ignore */
sender.sendMessage(["Bob", "Charlie"], "Hello everyone!");
sender.sendMessage("Development Team", "Important announcement!"); 