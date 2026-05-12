//* function that add numbers up to n

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

const time1 = performance.now();
addUpTo(1000000000);
const time2 = performance.now();
console.log(`Time Elapsed ${(time2 - time1) / 1000} seconds`);

// console.log(addUpTo(5))

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

const time3 = performance.now();
addUpTo2(1000000000);
const time4 = performance.now();
console.log(`Time Elapsed ${(time4 - time3) / 1000} seconds`);

/**
 * Which one is actually better and what is the term "better" means in the Big O context ?
 * Faster?
 * Less memory-intensive?
 * More readable?
 */
