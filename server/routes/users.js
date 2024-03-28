//routes for products
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')


//api /users
router.post('/', usersController.createUser);
router.get('/', usersController.obtainUsers);
router.put('/:id', usersController.updateUser);
router.get('/:id', usersController.obtainUser)
router.delete('/:id', usersController.deleteUser)

module.exports = router;