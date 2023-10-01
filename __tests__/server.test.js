'use strict';

const { app } = require('../lib/server.js');
const supertest = require('supertest');
const request = supertest(app);

describe('404 on a bad route', () => {
  test('Route should not exist, 404 expected', async () => {
    const response = await request.get('/badroute');
    expect(response.status).toEqual(404);
  });
});

describe('404 on a bad method', () => {
  test('Method should not exist, 404 expected', async () => {
    const response = await request.put('/person?name=fred');
    expect(response.status).toEqual(404);
  });
});

describe('500 on no name in query string', () => {
  test('No name in query string, 500 expected', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
  });
});

describe('200 on name in query string', () => {
  test('Name is in the query string, 200 expected', async () => {
    const response = await request.get('/person?name=fred');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ name: 'fred' });
  });
});
