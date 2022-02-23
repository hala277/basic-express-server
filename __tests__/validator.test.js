'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');

test('500 name erroe',async () => {
    const response = await supertest(server.app).get('/person');
    expect(response.status).toEqual(500);
})
