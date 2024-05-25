// function generatePrimes(start, end) {
//   const primes = [];

//   // Loop through the range from start to end
//   for (let i = start; i <= end; i++) {
//     // Skip negative numbers and 0
//     if (i <= 1) {
//       continue;
//     }

//     let isPrime = true;

//     // Loop through potential divisors from 2 to sqrt(i)
//     for (let j = 2; j * j <= i; j++) {
//       // If i is divisible by j, it's not a prime number
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     // If i is prime, add it to the list of primes
//     if (isPrime) {
//       primes.push(i);
//     }
//   }

//   return primes;
// }
// module.exports = generatePrimes;

function generatePrimes(start, end) {
  const primes = [];

  // Loop through the range from start to end
  for (let i = start; i <= end; i++) {
    // Skip negative numbers and 0
    if (i <= 1) {
      continue;
    }

    let isPrime = true;

    // Loop through potential divisors from 2 to sqrt(i)
    for (let j = 2; j * j <= i; j++) {
      // If i is divisible by j, it's not a prime number
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    // If i is prime, add it to the list of primes
    if (isPrime) {
      primes.push(i);
    }
  }

  return primes;
}

module.exports = generatePrimes;
