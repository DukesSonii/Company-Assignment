const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { Basic, SieveofEratosthenes, Approach3 } = require("./PrimeGenerator");

const { addLogToDb, getLogsFromDb } = require("./database");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/primeNum", (req, res) => {
  const { start, end, strategy } = req.query;

  if (!start || !end || !strategy) {
    return res
      .status(400)
      .json({ error: "Please enter start, end, and strategy parameters" });
  }

  const startval = parseInt(start, 10);
  const endval = parseInt(end, 10);

  if (isNaN(startval) || isNaN(endval)) {
    return res
      .status(400)
      .json({ error: "Enter valid start and end parameters" });
  }

  let primes;
  const startTime = process.hrtime();

  let strategyName;
  switch (strategy) {
    case "basic":
      primes = Basic(startval, endval);
      strategyName = "Basic";
      break;
    case "sieve":
      primes = SieveofEratosthenes(startval, endval);
      strategyName = "SieveofEratosthenes";
      break;
    case "trial":
      primes = Approach3(startval, endval);
      strategyName = "Approach3";
      break;
    default:
      return res.status(400).json({ error: "Invalid strategy parameter" });
  }
  const elapsedTime = process.hrtime(startTime);
  const ElapseTimeMS = (elapsedTime[0] * 1e9 + elapsedTime[1]) / 1e6;

  const log = {
    timestamp: new Date().toISOString(),
    start: startval,
    end: endval,
    strategy: strategyName,
    timeElapsed: ElapseTimeMS,
    numberOfPrimes: primes.length,
  };

  addLogToDb(log, (err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to save log to database" });
    }
    res.json({ primes, count: primes.length });
  });
});

app.get("/Seelogs", (req, res) => {
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
  console.log(`Prime Number Server is on port:${port}`);
});
