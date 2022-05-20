const request = require('supertest');
const app = require('./src/app');
const Usuario = require('./src/models/Usuario');

test('teste simples de rota', async () => {
  const usuario = new Usuario();
  usuario.id = '12213-323212-3112';
  usuario.nome = 'Augusto Almeida';
  usuario.email = 'augustalmeid@gmail.com';
  usuario.senha = '123456';
  usuario.token = 'umtokenqualquer';
  const response = await request(app)
    .get('/')
    .send();
  expect(response.status).toBe(200);
});
