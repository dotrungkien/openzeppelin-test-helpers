const { expect } = require('chai');
const AssertionError = require('assert').AssertionError;

async function assertFailure (promise) {
  try {
    await promise;
  } catch (error) {
    return;
  }
  expect.fail();
}

module.exports = assertFailure;
