const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/favorites/:id', userController.getFavorites)
router.patch('/delete', userController.removeFavorite);
router.patch('/favorites', userController.saveFavorites);

module.exports = router;
