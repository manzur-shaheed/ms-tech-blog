// import models
const { Comment } = require('../models');

// sample comments
const sample_comments = [
  {
    comment: 'Really useful review.',
    user_id: '3',
    post_id: '1'
  },
  {
    comment: 'Seems biased.',
    user_id: '1',
    post_id: '1'
  },
  {
    comment: 'Good review.',
    user_id: '2',
    post_id: '2'
  },
  {
    comment: 'Our network build needs to be vendor-independent',
    user_id: '3',
    post_id: '3'
  },
  {
    comment: 'Cisco has been long in industry.',
    user_id: '3',
    post_id: '4'
  }
];

// create and insert sample user data
const commentSeeds = () => Comment.bulkCreate(sample_comments);

// export
module.exports = commentSeeds;