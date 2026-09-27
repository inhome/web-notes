"use strict";

function gcd(a, b) {
  a = a < 0n ? -a : a;
  b = b < 0n ? -b : b;
  while (b !== 0n) [a, b] = [b, a % b];
  return a;
}

function makeRational(numerator, denominator) {
  if (typeof numerator !== "bigint" || typeof denominator !== "bigint") {
    throw new TypeError("Use BigInt numerator and denominator");
  }
  if (denominator === 0n) throw new RangeError("Zero denominator");
  const factor = gcd(numerator, denominator) * (denominator < 0n ? -1n : 1n);
  return Object.freeze({ numerator: numerator / factor, denominator: denominator / factor });
}

function addRational(a, b) {
  return makeRational(a.numerator * b.denominator + b.numerator * a.denominator,
    a.denominator * b.denominator);
}

function multiplyRational(a, b) {
  return makeRational(a.numerator * b.numerator, a.denominator * b.denominator);
}

module.exports = { makeRational, addRational, multiplyRational };
