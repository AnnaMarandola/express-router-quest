
const express = require('express');
const commments = require('./comments');
const fakePosts = require('../data/posts');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(fakePosts);
});

router.get('/:postId', (req, res) => {
  const postId = Number(req.params.id);
  const foundPost = fakePosts.find((post) => post.id === postId);
  if (!foundPost) {
    return res.status(404).json({
      error: 'Post not found',
    });
  }
  return res.json(foundPost);
});

router.use('/:postId/comments', commments)

module.exports = router;