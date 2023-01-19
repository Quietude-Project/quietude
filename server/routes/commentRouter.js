const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router();

router.get('/:id', commentController.getComment)
router.post('/create', commentController.createComment)

module.exports = router;