const { getLogsFromDb } = require("./database");

function displayLogs() {
  getLogsFromDb((err, logs) => {
    if (err) {
      console.error("Error retrieving logs:", err);
      return;
    }

    if (logs.length === 0) {
      console.log("No logs found.");
      return;
    }

    logs.forEach((log) => {
      console.log(`Timestamp: ${log.timestamp}`);
      console.log(`Start: ${log.start}`);
      console.log(`End: ${log.end}`);
      console.log(`Strategy: ${log.strategy}`);
      console.log(`Time Elapsed: ${log.timeElapsed} ms`);
      console.log(`No. of Primes: ${log.numberOfPrimes}`);
      console.log("-----------------------------------");
    });
  });
}

displayLogs();
