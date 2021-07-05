// import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User hasMany Comments
User.hasMany(Comment, {
  foreignKey: 'user_id'
});

// User hasMany Posts
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// Comment belongsTo User
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

// Comment belongsTo Post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

// Post hasMany Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

// Post belongsTo User
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// export
module.exports = {
  User,
  Post,
  Comment 
};