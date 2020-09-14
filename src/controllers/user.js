const User = require('../models/user');

const create = async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    res.status(201).send({ user })
  } catch (e) {
    res.status(400).send(e)
  }
}

export { create };