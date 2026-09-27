"use strict";

// Left fold over integer indices [start, end]. Empty ranges return identity.
function accumulate(combine, identity, term, start, end) {
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end)) {
    throw new RangeError("Range endpoints must be safe integers");
  }
  let result = identity;
  for (let i = start; i <= end; i += 1) result = combine(result, term(i));
  return result;
}

function compose(f, g) {
  return value => f(g(value));
}

function repeated(f, count) {
  if (!Number.isSafeInteger(count) || count < 0) throw new RangeError("Invalid repetition count");
  return value => {
    for (let i = 0; i < count; i += 1) value = f(value);
    return value;
  };
}

module.exports = { accumulate, compose, repeated };
