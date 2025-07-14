const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET all posts
router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.render('index', { posts });
});

// POST create a new message
router.post('/add', async (req, res) => {
  const { message } = req.body;
  await Post.create({ message });
  res.redirect('/');
});

// GET one post
router.get('/post/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('show', { post });
});

// GET edit form
router.get('/edit/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('edit', { post });
});

// PUT update post
router.put('/edit/:id', async (req, res) => {
  const { message } = req.body;
  await Post.findByIdAndUpdate(req.params.id, { message });
  res.redirect(`/post/${req.params.id}`);
});

// DELETE a post
router.delete('/post/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
