const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Open the database connection
const db = new sqlite3.Database(path.join(__dirname, "testagain.db"));

// Initialize the database
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS logs (timestamp TEXT, start INTEGER, end INTEGER, strategy TEXT, timeElapsed REAL, numberOfPrimes INTEGER)"
  );
});

function addLogToDb(log, callback) {
  const stmt = db.prepare(
    "INSERT INTO logs (timestamp, start, end, strategy, timeElapsed, numberOfPrimes) VALUES (?, ?, ?, ?, ?, ?)"
  );
  stmt.run(
    log.timestamp,
    log.start,
    log.end,
    log.strategy,
    log.timeElapsed,
    log.numberOfPrimes,
    callback
  );
  stmt.finalize();
}

function getLogsFromDb(callback) {
  db.all("SELECT * FROM logs", callback);
}

module.exports = {
  addLogToDb,
  getLogsFromDb,
};
