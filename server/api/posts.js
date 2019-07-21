const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

function isValidId(req, res, next) {
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

function validPost(post) {
  const hasContent = typeof post.content == 'string' && post.content.trim() != '';
  return hasContent;
}

router.get('/', (req, res) => {
  queries.getAll().then(posts => {
    res.json(posts);
  })
});

router.get('/:id', isValidId, (req, res, next) => {
  queries.getOne(req.params.id).then(post => {
    if(post) {
      res.json(post);
    } else {
      next();
    }
  });
});

module.exports = router; 