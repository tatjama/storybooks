# Tatjana Marković STORYBOOKS Node.js APP from Scratch  by Traversy Media

- [YOUTUBE](https://www.youtube.com/watch?v=SBvmnHTQIPY)

## Table of contents

  - [Overview](#overview)
  - [The challenge](#the-challenge)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [Author](#author)

## Important
  .gitignore .env is not working properly so manuel control .env files are not committed to the repository
## Overview

- middleware folder 
  1. logger.js

- public folder - Static Pages to navigate
  1. html pages: about.html and index.html
  2. CSS folder -> style.css  

- routes/api folder
  1. members.js - REST API endpoints

- views folder -Template views - Server side render views
  1. layouts/main.handlebars - Template Container
  2. index.handlebars

## The challenge

Create App for adding public and private stories using Node.js, MongoDB - Atlas, Express, React.js and Passport oauth from Scratch.

### Links

- Solution URL: [GitHub](https://github.com/tatjama/storybooks)
- [Heroku git URL](https://git.heroku.com/peaceful-everglades-52135.git)
- Live URL: [Heroku](https://peaceful-everglades-52135.herokuapp.com/)

## My process

1. Create a new project node_storybooks
2. Install node.js
3. create package.json
    npm init 
4. Create Cluster0 on MongoDB Atlas AWS username: tanja
5. Install dependencies: 
    - express - node framework for create routes
    - express-session - sessions and cookies
    - express-handlebars - server render template (template engine)
    - mongoose - work with our DB and create models
    - connect-mongo - allows to store our session on DB
    - dotenv - environment variable
    - method-override - PUT and DELETE are supported from the template engine, by default it is only allowed GET and POST
    - moment - for format dates
    - morgan - login  
    - passport - authentication 
    - passport-google-oauth20 - Google authentication version 2.0 
    npm install express express-session express-handlebars mongoose connect-mongo dotenv method-override moment morgan passport passport-google-oauth20
6. Install nodemon and cross-env dev dependencies with
    npm install -D nodemon cross-env
    We have 2 ways for execution:
    1. nodemon index
    2. "scripts": {
                  "start": "cross-env NODE_ENV=production node app",
                  "dev": "cross-env NODE_ENV=development nodemon app"
                    },
        npm start dev 
7. create .gitignore   
  /node_modules
  *.env
8. GITHUB: git init
           git add .
         : git commit and push
9. At Template Main link Materialized css i js cdn and Font-awesome css cdn,
10. Create Static folder and static render files
11. Template - Create Server render Views
  - login - template
12. Protect Routes with Google authentication version 2.0
13. Create dashboard stories view
14. Add new Story, Update Story, Delete Story and View Story
15. Deploy to Heroku
    instal Heroku CLI
    command: heroku --version
           : heroku login 
           : heroku create 
           : heroku -> deploy
           : heroku git:remote -a powerful-savannah-08202
           : git push heroku main
    important: - set variables to Settings ->  Config Vars,
               - on package.json remove dev dependencies only store in "scripts": "start": "node app.js",
               - redirect url at passport.js from "auth/google/callback"  to "http://peaceful-everglades-52135.herokuapp.com/auth/google/callback"   
               - autorize redirect url "http://peaceful-everglades-52135.herokuapp.com/auth/google/callback" at Google Cloud Platform -> credentials -> ADD URI
### Built with

1. Node.js,
2. MongoDB Atlas AWS Database,
3. express.js, express-session, express-handlebars - node framework for create routes sessions      and  cookies, template engine, 
4. mongoose - work with our DB and create models,
5. connect-mongo - allows to store our session on DB,
6. dotenv - environment variable,
7. method-override - PUT and DELETE are supported from the template engine, by default it is only allowed GET and POST,
8. moment - for format dates,
9. morgan - login,
10. passport, passport-google-oauth20 - authentication, Google authentication version 2.0,
11. nodemon (dev dependency) - allows us continuing development no need to restart server
12. cross-env (dev dependency) - allows us to configure global environment variables
13. Materialized css and js cdn,
14. Font Awesome css cdn,
15. CKeditor cdn, editor for textarea 
16. Heroku for deploy app
## Author

- Website - [Tatjana Markovic](https://my-react-portfolio-tatjana.vercel.app/)
- LinkedIn - [Tatjana Marković](https://www.linkedin.com/in/tatjana-markovi%C4%87-919501189/)
- GitHub - [tatjama](https://github.com/tatjama)