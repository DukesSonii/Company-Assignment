// // const express = require("express");
// // const bodyParser = require("body-parser");
// // const generatePrimes = require("./PrimeGenerator");
// // const logs = require("./logs");
// // const path = require("path");

// // const app = express();
// // const port = 3000;

// // app.use(bodyParser.json());

// // // Serve logs.html file
// // app.get("/logs.html", (req, res) => {
// //   res.sendFile(path.join(__dirname, "logs.html"));
// // });

// // app.get("/api/primes", (req, res) => {
// //   const { start, end } = req.query;

// //   if (!start || !end) {
// //     return res
// //       .status(400)
// //       .json({ error: "Please Enter start and end parameters" });
// //   }

// //   const startInt = parseInt(start, 10);
// //   const endInt = parseInt(end, 10);

// //   if (isNaN(startInt) || isNaN(endInt)) {
// //     return res
// //       .status(400)
// //       .json({ error: "Enter Valid Start or end parameters" });
// //   }

// //   const startTime = process.hrtime();
// //   const primes = generatePrimes(startInt, endInt);
// //   const elapsedTime = process.hrtime(startTime);
// //   const timeElapsedInMs = (elapsedTime[0] * 1e9 + elapsedTime[1]) / 1e6;

// //   logs.addLog(
// //     startInt,
// //     endInt,
// //     "generatePrimes",
// //     timeElapsedInMs,
// //     primes.length
// //   );

// //   res.json({ primes, count: primes.length });
// // });

// // app.get("/api/primes/logs", (req, res) => {
// //   res.json(logs.getLogs());
// // });

// // app.listen(port, () => {
// //   console.log(`Prime Number Generator Server is running on port ${port}`);
// // });

// // const sqlite3 = require("sqlite3").verbose();
// // const db = new sqlite3.Database("test.db");

// // db.serialize(() => {
// //   db.run(
// //     "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)"
// //   );

// //   db.run("INSERT INTO users (name) VALUES (?)", ["John"], function (err) {
// //     if (err) {
// //       console.error(err.message);
// //     }
// //     console.log(`A row has been inserted with rowid ${this.lastID}`);
// //   });

// //   db.all("SELECT * FROM users", [], (err, rows) => {
// //     if (err) {
// //       throw err;
// //     }
// //     rows.forEach((row) => {
// //       console.log(row.name);
// //     });
// //   });
// // });

// // const express = require("express");
// // const bodyParser = require("body-parser");
// // const path = require("path");
// // const generatePrimes = require("./PrimeGenerator");
// // const { addLogToDb, getLogsFromDb } = require("./database");

// // const app = express();
// // const port = 3000;

// // app.use(bodyParser.json());

// // app.get("/api/primes", (req, res) => {
// //   const { start, end } = req.query;

// //   if (!start || !end) {
// //     return res
// //       .status(400)
// //       .json({ error: "Please Enter start and end parameters" });
// //   }

// //   const startInt = parseInt(start, 10);
// //   const endInt = parseInt(end, 10);

// //   if (isNaN(startInt) || isNaN(endInt)) {
// //     return res
// //       .status(400)
// //       .json({ error: "Enter Valid Start or end parameters" });
// //   }

// //   const startTime = process.hrtime();
// //   const primes = generatePrimes(startInt, endInt);
// //   const elapsedTime = process.hrtime(startTime);
// //   const timeElapsedInMs = (elapsedTime[0] * 1e9 + elapsedTime[1]) / 1e6;

// //   const log = {
// //     timestamp: new Date().toISOString(),
// //     start: startInt,
// //     end: endInt,
// //     strategy: "generatePrimes",
// //     timeElapsed: timeElapsedInMs,
// //     numberOfPrimes: primes.length,
// //   };

// //   addLogToDb(log, (err) => {
// //     if (err) {
// //       return res.status(500).json({ error: "Failed to save log to database" });
// //     }
// //     res.json({ primes, count: primes.length });
// //   });
// // });

// // app.get("/api/primes/logs", (req, res) => {
// //   getLogsFromDb((err, logs) => {
// //     if (err) {
// //       return res
// //         .status(500)
// //         .json({ error: "Failed to retrieve logs from database" });
// //     }
// //     res.json(logs);
// //   });
// // });

// // app.get("/DataDisplay/logs.html", (req, res) => {
// //   res.sendFile(path.join(__dirname, "logs.html"));
// // });

// // app.listen(port, () => {
// //   console.log(`Prime Number Generator Server is running on port ${port}`);
// // });

// const express = require("express");
// const bodyParser = require("body-parser");
// const generatePrimes = require("./PrimeGenerator");
// const logs = require("./logs");
// const path = require("path");

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// // Serve logs.html file
// app.get("/logs.html", (req, res) => {
//   res.sendFile(path.join(__dirname, "logs.html"));
// });

// app.get("/api/primes", (req, res) => {
//   const { start, end } = req.query;

//   if (!start || !end) {
//     return res
//       .status(400)
//       .json({ error: "Please Enter start and end parameters" });
//   }

//   const startInt = parseInt(start, 10);
//   const endInt = parseInt(end, 10);

//   if (isNaN(startInt) || isNaN(endInt)) {
//     return res
//       .status(400)
//       .json({ error: "Enter Valid Start or end parameters" });
//   }

//   const startTime = process.hrtime();
//   const primes = generatePrimes(startInt, endInt);
//   const elapsedTime = process.hrtime(startTime);
//   const timeElapsedInMs = (elapsedTime[0] * 1e9 + elapsedTime[1]) / 1e6;

//   logs.addLog(
//     startInt,
//     endInt,
//     "generatePrimes",
//     timeElapsedInMs,
//     primes.length
//   );

//   res.json({ primes, count: primes.length });
// });

// app.get("/api/primes/logs", (req, res) => {
//   res.json(logs.getLogs());
// });

// app.listen(port, () => {
//   console.log(`Prime Number Generator Server is running on port ${port}`);
// });
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const generatePrimes = require("./PrimeGenerator");
const { addLogToDb, getLogsFromDb } = require("./database");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/api/primes", (req, res) => {
  const { start, end } = req.query;

  if (!start || !end) {
    return res
      .status(400)
      .json({ error: "Please Enter start and end parameters" });
  }

  const startInt = parseInt(start, 10);
  const endInt = parseInt(end, 10);

  if (isNaN(startInt) || isNaN(endInt)) {
    return res
      .status(400)
      .json({ error: "Enter Valid Start or end parameters" });
  }

  const startTime = process.hrtime();
  const primes = generatePrimes(startInt, endInt);
  const elapsedTime = process.hrtime(startTime);
  const timeElapsedInMs = (elapsedTime[0] * 1e9 + elapsedTime[1]) / 1e6;

  const log = {
    timestamp: new Date().toISOString(),
    start: startInt,
    end: endInt,
    strategy: "generatePrimes",
    timeElapsed: timeElapsedInMs,
    numberOfPrimes: primes.length,
  };

  addLogToDb(log, (err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to save log to database" });
    }
    res.json({ primes, count: primes.length });
  });
});

app.get("/api/primes/logs", (req, res) => {
  getLogsFromDb((err, logs) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Failed to retrieve logs from database" });
    }
    res.json(logs);
  });
});

app.get("/DataDisplay/logs.html", (req, res) => {
  res.sendFile(path.join(__dirname, "DataDisplay", "logs.html"));
});

app.listen(port, () => {
  console.log(`Prime Number Generator Server is running on port ${port}`);
});
