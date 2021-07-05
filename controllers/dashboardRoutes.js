// routes and models
const router = require('express').Router();
const { Comment, Post, User } = require('../models');

// helper to check if user is logged in
const withAuth = require('../utils/auth');

// dashboard 
router.get('/', withAuth, async(req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [{ model: User }]
    });

    // serialize the data
    const posts = postData.map((post) => post.get({ plain: true }));
    
    // res.status(200).json(postData);
    res.render('dashboard-posts', { 
      layout: 'homepage', 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// new post 
router.get('/create', withAuth, (req, res) => {
  res.render('create-post', { 
    layout: 'homepage', 
    logged_in: req.session.logged_in 
  });
});

// edit post 
router.get('/edit/:id', withAuth, async(req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User, attributes: ['username'] }]
    });
    // console.log(postData);

    // serialize the data
    const post = postData.get({ plain: true });
    // console.log(post);

    // res.status(200).json(postData);
    res.render('edit-post', { 
      layout: 'homepage', 
      ...post, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// export
module.exports = router;