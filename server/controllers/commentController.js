const Comment = require('../models/Comment');

const commentController = {};

// REGISTER USER
commentController.getComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(req.body)

    const comment = await Comment.find({ store_id: id })
    // console.log(savedUser)
    res.status(200).json(comment);
  } catch (err) {
    console.log(err)
    return next({
      status: 400,
      log: 'Error in commentController.getComment',
      message: { err: 'Error in commentController.getComment' },
    });
  }
};

commentController.createComment = async (req, res, next) => {
  try {
    const { text, store_id } = req.body;
    console.log('HERE', req.body)

    const newComment = await Comment.create({ text, store_id })
    // console.log(savedUser)
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err)
    return next({
      status: 400,
      log: 'Error in commentController.createComment',
      message: { err: 'Error in commentController.createComment' },
    });
  }
};


module.exports = commentController;
