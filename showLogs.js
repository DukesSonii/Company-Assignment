const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "test.db");
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS logs (timestamp TEXT, start INTEGER, end INTEGER, strategy TEXT, timeElapsed REAL, numberOfPrimes INTEGER)"
  );
});

function displayLogs() {
  db.all("SELECT * FROM logs", [], (err, rows) => {
    if (err) {
      console.error("Error retrieving logs:", err);
      return;
    }

    rows.forEach((row) => {
      console.log(`Timestamp: ${row.timestamp}`);
      console.log(`Start: ${row.start}`);
      console.log(`End: ${row.end}`);
      console.log(`Strategy: ${row.strategy}`);
      console.log(`Time Elapsed: ${row.timeElapsed} ms`);
      console.log(`No. of Primes: ${row.numberOfPrimes}`);
    });

    // For Closong the connection
    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("Closed the database connection.");
    });
  });
}

displayLogs();
