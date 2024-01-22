// Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controller/commentController');
const authController = require('../controller/authController');

// Create comment
router.post('/', authController.protect, commentController.createComment);

// Get all comments
router.get('/', commentController.getAllComments);

// Get comment by id
router.get('/:id', commentController.getCommentById);

// Update comment by id
router.put('/:id', authController.protect, commentController.updateComment);

// Delete comment by id
router.delete('/:id', authController.protect, commentController.deleteComment);

module.exports = router;