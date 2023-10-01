'use strict';

const logger = require('./logger.js');

describe('Tests the logger module', () => {
  test('Gets information about the request path, method, and query and calls next()', () => {
    console.log = jest.fn();
    const req = {
      method: 'TEST',
      path: 'TEST',
      query: 'TEST',
    };
    const res = {};
    const next = jest.fn();

    logger(req, res, next);
    expect(console.log).toHaveBeenCalledWith('REQUEST METHOD: TEST');
    expect(console.log).toHaveBeenCalledWith('REQUEST PATH: TEST');
    expect(console.log).toHaveBeenCalledWith('REQUEST QUERY: TEST');
    expect(next).toHaveBeenCalled();
  });
});
