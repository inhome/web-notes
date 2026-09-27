"use strict";

function natural(n) {
  if (!Number.isSafeInteger(n) || n < 0) throw new RangeError("Expected a non-negative safe integer");
}

// f(n) = n for n < 3; otherwise f(n-1) + 2f(n-2) + 3f(n-3).
// Keep the recursive version for tracing small inputs, not for large n.
function recurrenceRecursive(n) {
  natural(n);
  function visit(k) {
    if (k < 3) return BigInt(k);
    return visit(k - 1) + 2n * visit(k - 2) + 3n * visit(k - 3);
  }
  return visit(n);
}

function recurrenceIterative(n) {
  natural(n);
  if (n < 3) return BigInt(n);
  let a = 0n;
  let b = 1n;
  let c = 2n;
  for (let k = 3; k <= n; k += 1) [a, b, c] = [b, c, c + 2n * b + 3n * a];
  return c;
}

// BigInt base and Number exponent. Avoid 32-bit bitwise operators.
function fastPower(base, exponent) {
  if (typeof base !== "bigint") throw new TypeError("Base must be a BigInt");
  natural(exponent);
  let result = 1n;
  while (exponent > 0) {
    if (exponent % 2 === 1) result *= base;
    exponent = Math.floor(exponent / 2);
    if (exponent > 0) base *= base;
  }
  return result;
}

module.exports = { recurrenceRecursive, recurrenceIterative, fastPower };
