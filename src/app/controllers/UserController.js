const { users } = require('../models');

class UserController
{
  async index(req, res)
  {
    users.findAll().then(data => {
      return res.send(data);
    }).catch(err => {
      res.status(500).send({ message: err.message || "Some error occurred while retrieving users." });
    });
  }
}
module.exports = new UserController();
