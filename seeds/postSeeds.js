// import models
const { Post } = require('../models');

// sample posts
const sample_posts = [
  {
    title: 'A review on Juniper Routers',
    content: 'The Juniper router has an excellent range of resources and a great resilience. Very ease to setup, and very easy to configure after deployment. The incredible number of native resources makes this router one of the bests to work with.',
    user_id: '2'
  },
  {
    title: 'Arista Switches',
    content: 'Arista Data Center Switches deliver efficient, reliable, high performance Cloud Network Infrastructure and Architectures on 40GbE - 100GbE switching platforms.',
    user_id: '1'
  },
  {
    title: 'Arista EOS',
    content: 'Arista Networks features switches with high-density, non-blocking Ethernet ports that are controlled through an extensible, Linux-based, modular network operating system. ',
    user_id: '3'
  },
  {
    title: 'Cisco 4331 routers',
    content: 'Cisco 4331 router revolutionizes WAN communications in the enterprise branch. With new intelligent network capabilities, it specifically addresses the growing need for application-aware networking in distributed enterprise sites.',
    user_id: '4'
  }
];

// create and insert sample user data
const postSeeds = () => Post.bulkCreate(sample_posts);

// export
module.exports = postSeeds;