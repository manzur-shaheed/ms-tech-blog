# ms-tech-blog
![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

A CMS-style blog site, where developers can publish their blog posts and comment on other developers’ posts as well. 

## Installation

Code: [Code](https://github.com/manzur-shaheed/ms-tech-blog) 

You can clone code from [github link](https://github.com/manzur-shaheed/ms-tech-blog) and run it locally on your computer. 

#### Deployed
This application is deployed at [link](https://manzur-tech-blog.herokuapp.com/) on heroku.
#### Prerequisites 
A computer with ```mysql``` database installed locally, ```node.js``` and ```npm``` (node package manager). It uses following ```node.js``` packages -
- bcrypt
- connect-session-sequelize
- dotenv
- express
- express-handlebars
- express-session
- mysql2
- sequelize

To clone code from github, you need to have aceess to the Internet. Also your computer should have Terminal (Unix) software installed. For Windows users, you can get it from https://www.cygwin.com/. For Mac users, it comes pre-installed with MacOS. 

#### Installing and running 
- Open a terminal.
- Create a directory for this project.
- Change current directory to this project direcory.
- Issue the following command -
```
git@github.com:manzur-shaheed/ms-tech-blog.git
```
- If you don't have ```node.js``` installed already then download it from [here](https://nodejs.org/en/download/), and follow the instructions to install it.
- Once installed, use ```npm``` to install node packages listed above by issuing ```npm i <package>``` command at the terminal prompt.
- After that you need to create a database using the file ```db/schema.sql```. 

Following image shows the design of the databse and relations between the tables -

![db_desgn](./assets/images/db_schema.png)

- Run the following command to create database and provide your Mysql root password when asked -
```
mshaheed$ mysql -u root -p < db/schema.sql
Enter password:
mshaheed$
```
- Also populate ```tech_blog_db``` database with some sample data -
```
mshaheed$ npm run seed
```

## Contribution Guidelines
You can expand this app by adding more menus and features. 
## License
MIT License

Copyright (c) 2021 Manzur Shaheed

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
## Contacts
#### Github
- [Manzur Shaheed](https://github.com/manzur-shaheed/)
#### Email
- [Manzur Shaheed](mailto:shaheed_manzur@yahoo.com)
## Acknowledgements
* **Billie Thompson** - [PurpleBooth](https://github.com/PurpleBooth) for the README Template.
* [Bootcamp mini-project](https://columbia.bootcampcontent.com/columbia-bootcamp/cu-nyc-virt-fsf-pt-03-2021-u-c/-/tree/master/14-MVC/01-Activities/28-Stu_Mini-Project)



