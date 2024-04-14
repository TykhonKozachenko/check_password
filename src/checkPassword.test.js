'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword)
      .toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('Password1!');

    expect(typeof result)
      .toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    const validPassword = checkPassword('Password1!');

    expect(validPassword)
      .toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    const validPassword = checkPassword('Test1234Test!@#$');

    expect(validPassword)
      .toBe(true);
  });

  it(`should return false for the password with < 8 characters`, () => {
    const invalidPassword = checkPassword('Pass2!@');

    expect(invalidPassword)
      .toBe(false);
  });

  it(`should return false for the password with > 16 characters`, () => {
    const invalidPassword = checkPassword('Pass2!@jdshbakfjnasdlm;a');

    expect(invalidPassword)
      .toBe(false);
  });

  it(`should return false for the password without digit`, () => {
    const invalidPassword = checkPassword('Testtest!');

    expect(invalidPassword)
      .toBe(false);
  });

  it(`should return false for the password without uppercase letter`, () => {
    const invalidPassword = checkPassword('t5esttest!');

    expect(invalidPassword)
      .toBe(false);
  });

  it(`should return false for the password without special character`, () => {
    const invalidPassword = checkPassword('t5esttestM');

    expect(invalidPassword)
      .toBe(false);
  });
});
