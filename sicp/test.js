"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { recurrenceRecursive, recurrenceIterative, fastPower } = require("./processes");
const { accumulate, compose, repeated } = require("./higher-order");
const { makeRational, addRational, multiplyRational } = require("./rational");

test("recursion and iteration describe the same recurrence", () => {
  const expected = [0n, 1n, 2n, 4n, 11n, 25n, 59n];
  expected.forEach((value, n) => assert.equal(recurrenceIterative(n), value));
  for (let n = 0; n <= 12; n += 1) assert.equal(recurrenceRecursive(n), recurrenceIterative(n));
  assert.ok(recurrenceIterative(100) > BigInt(Number.MAX_SAFE_INTEGER));
  assert.throws(() => recurrenceIterative(-1), RangeError);
  assert.throws(() => recurrenceRecursive(1.5), RangeError);
});
test("fast power agrees with BigInt exponentiation", () => {
  for (let base = -5n; base <= 5n; base += 1n) {
    for (let exponent = 0; exponent <= 30; exponent += 1) {
      assert.equal(fastPower(base, exponent), base ** BigInt(exponent));
    }
  }
  assert.equal(fastPower(-1n, 2 ** 32 + 1), -1n);
  assert.throws(() => fastPower(2n, -1), RangeError);
  assert.throws(() => fastPower(2, 3), TypeError);
});
test("accumulate supports sums, products and empty ranges", () => {
  assert.equal(accumulate((a, b) => a + b, 0, x => x * x, 1, 5), 55);
  assert.equal(accumulate((a, b) => a * b, 1, x => x, 1, 5), 120);
  assert.equal(accumulate((a, b) => a * b, 1, x => x, 2, 1), 1);
  assert.equal(accumulate((a, b) => a - b, 0, x => x, 1, 3), -6);
  assert.throws(() => accumulate((a, b) => a + b, 0, x => x, 0, Infinity), RangeError);
});
test("composition order and zero repetitions", () => {
  assert.equal(compose(x => x * x, x => x + 1)(3), 16);
  assert.equal(repeated(x => x * x, 2)(5), 625);
  assert.equal(repeated(() => { throw Error("must not run"); }, 0)(7), 7);
  assert.equal(repeated(x => x + 1, 10000)(0), 10000);
  assert.throws(() => repeated(x => x, 0.5), RangeError);
});
test("rationals normalize signs, reduce fractions and canonicalize zero", () => {
  assert.deepEqual(makeRational(6n, -8n), { numerator: -3n, denominator: 4n });
  assert.deepEqual(makeRational(-6n, -8n), makeRational(3n, 4n));
  assert.deepEqual(makeRational(0n, -9n), { numerator: 0n, denominator: 1n });
  assert.throws(() => makeRational(1n, 0n), RangeError);
  assert.throws(() => makeRational(1, 2), TypeError);
  const huge = 2n ** 100n;
  assert.deepEqual(makeRational(huge, 2n * huge), makeRational(1n, 2n));
});
test("rational arithmetic returns reduced values without mutating operands", () => {
  const half = makeRational(1n, 2n);
  const third = makeRational(1n, 3n);
  assert.deepEqual(addRational(half, third), makeRational(5n, 6n));
  assert.deepEqual(multiplyRational(half, third), makeRational(1n, 6n));
  assert.deepEqual(half, { numerator: 1n, denominator: 2n });
});
