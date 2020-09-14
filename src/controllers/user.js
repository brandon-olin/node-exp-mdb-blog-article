const User = require('../models/user');

module.exports = {
  create: async (req, res) =>{
    const user = new User(req.body)
    try {
      const token = await user.generateAuthToken();
      res.status(201).send({ user, token });
    } catch (e) {
      res.status(400).send(e);
    }
  },
  login: async (req, res) => {

  },
  logout: async (req, res) => {

  },
  read: async (req, res) => {

  },
  update: async (req, res) => {

  },
  delete: async (req, res) => {

  }
}
