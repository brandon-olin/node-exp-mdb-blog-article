const express = require('express');
const router = new express.Router();
const userController = require('../controllers/user');

router.post('/users', userController.create);
router.post('/users/login', userController.login)
router.post('/users/logout', userController.logout)
router.patch('/users/:id', userController.update)
router.get('/users/me', userController.read)
router.delete('/users/me', userController.delete)

module.exports = router;