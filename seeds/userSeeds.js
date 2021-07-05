// import models
const { User } = require('../models');

// sample users
const sample_users = [
  {
    username: 'User1',
    password: 'Password1'
  },
  {
    username: 'User2',
    password: 'Password2'
  },
  {
    username: 'User3',
    password: 'Password3'
  },
  {
    username: 'User4',
    password: 'Password4'
  }
];

// create and insert sample user data
const userSeeds = () => User.bulkCreate(sample_users, {
  individualHooks: true
});

// export
module.exports = userSeeds;