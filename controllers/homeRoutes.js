// home routes 
const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

// end point is / 

// home route
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ['username'] }]
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage-posts', { 
      layout: 'homepage', posts,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// single post 
router.get('/posts/:id', withAuth, async(req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ['username'] },
        { model: Comment, include: { model: User } }
      ]
    });

    // serialize the data
    const post = postData.get({ plain: true });

    // console.log(post);
    // res.status(200).json(postData);
    res.render('create-comment', { 
      layout: 'homepage', 
      ...post, 
      logged_in: req.session.logged_in 
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// login 
router.get('/login', (req, res) => {
  
  // if the user is logged in, redirect to homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  // otherwise paint login page
  res.render('login', { 
    layout: 'homepage'
  });
});

// sign up 
router.get('/signup', (req, res) => {
  
  // if the user is logged in, redirect to homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  
  // otherwise paint login page
  res.render('signup', { 
    layout: 'homepage'
  });
});

// export
module.exports = router;
