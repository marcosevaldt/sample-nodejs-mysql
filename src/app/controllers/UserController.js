const Model = require('../models');

class UserController
{
  async index(req, res)
  {
    Model.users.findAll().then(data => {
      return res.send(data);
    }).catch(err => {
      res.status(500).send({ message: err.message || "Some error occurred while retrieving users." });
    });
  }
}
module.exports = new UserController();
