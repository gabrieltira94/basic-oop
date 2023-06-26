export default class Database {
  private static instance: Database;

  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance(): Database {
    if (!Database.instance)
      this.instance = new Database();

    return Database.instance;
  }

  connect(): void {
    // Connect to the database
    console.log("Connected to the database");
  }

  query(sql: string): void {
    // Execute a database query
    console.log(`Executing query: ${sql}`);
  }
}