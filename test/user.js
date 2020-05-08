process.env.NODE_ENV = 'test'
const assert = require('assert')
const { users } = require('../src/app/models')
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect;
chai.use(chaiHttp);

describe('User', function() {

  it('it should create a user', async function() {
    const userObject = { name: 'Marcos', email: 'marcos@email.com' }
    const { name, email } = await users.create(userObject)
    const assertObject = { name: name, email: email }
    assert.deepEqual(userObject, assertObject)
  });

  it('it should return users list with status code 200', async function() {
    chai.request('http://0.0.0.0:8080')
    .get('/users')
    .then(function (res) {
      expect(res).to.have.status(200);
    })
    .catch(function (err) {
      throw err;
    });
  });

});
