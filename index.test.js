const request = require('supertest');
const app = require('./src/app');

test('teste simples de rota', async () => {
  const response = await request(app)
    .get('/')
    .send();
  expect(response.status).toBe(200);
  expect(response.body.error).toBeFalsy();
});
