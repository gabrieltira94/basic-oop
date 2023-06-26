import TV from "./TV";

const originalRemote = TV.getInstance();

originalRemote.openNetflix();
originalRemote.openAmazonPrime();

const phoneRemote = TV.getInstance();

console.log('\n\n');
phoneRemote.openYouTube();
phoneRemote.openOnlyFans();

console.log('\nAre same instance?');
console.log(originalRemote === phoneRemote); // Output: true => meaning the same printer connection is going to be used
