const assert = require('assert')
const { users } = require('../src/app/models')
describe('User', function() {
  it('it should create a user', async function() {
    const userObject = { name: 'Marcos', email: 'marcos@email.com' }
    const { name, email } = await users.create(userObject)
    const assertObject = { name: name, email: email }
    assert.deepEqual(userObject, assertObject)
  });
});
