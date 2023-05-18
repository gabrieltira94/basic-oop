import Database from "./Database";

const db1 = Database.getInstance();
db1.connect();
db1.query("SELECT * FROM users");

const db2 = Database.getInstance();
console.log(db1 === db2); // true => meaning the same database connection is going to be used