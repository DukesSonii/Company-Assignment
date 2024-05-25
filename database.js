const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "testfile.db");
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      timestamp TEXT,
      start INTEGER,
      end INTEGER,
      strategy TEXT,
      timeElapsed REAL,
      numberOfPrimes INTEGER
    )
  `);
});

function addLogToDb(log, callback) {
  const { timestamp, start, end, strategy, timeElapsed, numberOfPrimes } = log;
  db.run(
    `INSERT INTO logs (timestamp, start, end, strategy, timeElapsed, numberOfPrimes) VALUES (?, ?, ?, ?, ?, ?)`,
    [timestamp, start, end, strategy, timeElapsed, numberOfPrimes],
    callback
  );
}

function getLogsFromDb(callback) {
  db.all(`SELECT * FROM logs`, (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
}

module.exports = {
  addLogToDb,
  getLogsFromDb,
};
