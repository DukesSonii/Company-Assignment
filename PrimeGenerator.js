function basicIteration(start, end) {
  const primes = [];

  for (let i = start; i <= end; i++) {
    if (i <= 1) continue;

    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(i);
    }
  }

  return primes;
}

function sieveOfEratosthenes(start, end) {
  const sieve = Array(end + 1).fill(true);
  sieve[0] = sieve[1] = false;

  for (let i = 2; i * i <= end; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= end; j += i) {
        sieve[j] = false;
      }
    }
  }

  const primes = [];
  for (let i = start; i <= end; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }

  return primes;
}

function trialDivision(start, end) {
  const primes = [];

  for (let i = start; i <= end; i++) {
    if (i <= 1) continue;

    if (i % 2 === 0 && i !== 2) continue;

    let isPrime = true;
    for (let j = 3; j * j <= i; j += 2) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(i);
    }
  }

  return primes;
}

module.exports = {
  basicIteration,
  sieveOfEratosthenes,
  trialDivision,
};
