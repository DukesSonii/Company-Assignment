function createLogs() {
  const logs = [];

  function addLog(start, end, strategy, timeElapsed, numberOfPrimes) {
    const log = {
      timestamp: new Date().toISOString(),
      start,
      end,
      strategy,
      timeElapsed,
      numberOfPrimes,
    };
    logs.push(log);
  }

  function getLogs() {
    return logs;
  }

  return {
    addLog,
    getLogs,
  };
}

module.exports = createLogs();
