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

router.post('/', (req, res, next) => {
  // if(validPost(req.body)) {
    queries.create(req.body).then(posts => {
      res.json(posts[0]);
    });
  // } else {
  //   next(new Error('Invalid post'));
  // }
});

router.put('/:id', isValidId, (req, res, next) => {
  if(validPost(req.body)) {
    queries.update(req.params.id, req.body).then(posts => {
      res.json(posts[0]);
    });
  } else {
    next(new Error('Invalid post'));
  }
});

router.delete('/:id', isValidId, (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      deleted: true
    });
  });
});

module.exports = router; 
