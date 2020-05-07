const Model = require('../models');

class ActionController
{
  async index(req, res)
  {
    res.status(200).json({ method: 'index' })
  }

  async show(req, res)
  {
    const { id } = req.params
    res.status(200).json({ method: 'show', action_id: id, reactions: { 1: 'sms', 2: 'email'} })
  }

  async store(req, res)
  {
    res.status(200).json({ method: 'store' })
  }

  async update(req, res)
  {
    const { id } = req.params
    res.status(200).json({ method: 'update', action_id: id })
  }

  async destroy(req, res)
  {
    const { id } = req.params
    res.status(200).json({ method: 'destroy', action_id: id })
  }

}
module.exports = new ActionController();
