# Votapp - Node.js

**Live Demo**:

What can I do with Votapp?
--------

- As an authenticated user, I can keep my polls and come back later to access them.
- As an authenticated user, I can share my polls with my friends.
- As an authenticated user, I can see the aggregate results of my polls.
- As an authenticated user, I can delete polls that I decide I don't want anymore.
- As an authenticated user, I can create a poll with any number of possible items.
- As an unauthenticated or authenticated user, I can see and vote on everyone's polls.
- As an unauthenticated or authenticated user, I can see the results of polls in chart form. (using Chart.js)
- As an authenticated user, if I don't like the options on a poll, I can create a new option.

Features
--------

- **Local Authentication** using Email and Password
- **passport Authentication** via Twitter, GitHub and can add many more with [passport.js](http://passportjs.org/)
- Node.js 
- Express
- Flash notifications
- BDD Project Structure
- mongoose
- ejs
- nodemon
- morgan
- Gulp
- Mocha
- Bootstrap 3 
- Chart.js

Prerequisites
-------------
- [MongoDB](https://www.mongodb.org/downloads)
- [Node.js](http://nodejs.org)
- [mLab](https://mlab.com/) Database-as-a-Service
- [Finding your database connection info](http://docs.mlab.com/connecting/#connect-string)
- Set value of process.env in ([How to set](http://stackoverflow.com/questions/13333221/how-to-change-value-of-process-env-port-in-node-js))
  - config/database.js process.env.MONGO_VOTING
  - config/auth.js
    - process.env.TWITTER_KEY
    - process.env.TWITTER_SECRET
    - process.env.GITHUB_ID
    - process.env.GITHUB_SECRET
    
Now you are done, Ready to go!

Getting Started
-------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/extwiii/Votapp-Node.js.git

# Change directory
cd Votapp-Nodejs

# Install NPM dependencies
npm install

# Then simply start your app
node server.js

# Or, You can use gulp, it will also run mocha for test
gulp
```

**Note:** I highly recommend installing [Nodemon](https://github.com/remy/nodemon).
It watches for any changes in your  node.js app and automatically restarts the
server. Once installed, instead of `node server.js` use `nodemon`. It will
save you a lot of time in the long run, because you won't need to manually
restart the server each time you make a small change in code. To install, run
`sudo npm install -g nodemon`.  


Obtaining API Keys
------------------

To use any of the included APIs(twitter, github and many more) methods, you will need
to obtain appropriate credentials: Client ID, Client Secret, API Key, or
Username & Password. You will need to go through each provider to generate new
credentials.

<img src="https://g.twimg.com/ios_homescreen_icon.png" width="90">
- Sign in at <a href="https://apps.twitter.com/" target="_blank">https://apps.twitter.com</a>
- Click **Create a new application**
- Enter your application name, website and description
- For **Callback URL**: http://127.0.0.1:8080/auth/twitter/callback
- Go to **Settings** tab
- Under *Application Type* select **Read and Write** access
- Check the box **Allow this application to be used to Sign in with Twitter**
- Click **Update this Twitter's applications settings**
- Copy and paste *Consumer Key* and *Consumer Secret* keys into `config/auth.js` file
- After test your key, you can also set your key as a process.env ([How to set](http://stackoverflow.com/questions/13333221/how-to-change-value-of-process-env-port-in-node-js))

<hr>

<img src="https://github.global.ssl.fastly.net/images/modules/logos_page/GitHub-Logo.png" width="200">
- Go to <a href="https://github.com/settings/profile" target="_blank">Account Settings</a>
- Select **Applications** from the sidebar
- Then inside **Developer applications** click on **Register new application**
- Enter *Application Name* and *Homepage URL*
- For *Authorization Callback URL*: http://localhost:8080/auth/github/callback
- Click **Register application**
- Now copy and paste *Client ID* and *Client Secret* keys into `config/auth.js` file
- After test your key, you can also set your key as a process.env ([How to set](http://stackoverflow.com/questions/13333221/how-to-change-value-of-process-env-port-in-node-js))

Project Structure
-----------------

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **app/models**/poll.js             | Mongoose schema and model for Poll.                          |
| **app/models**/user.js             | Mongoose schema and model for User.                          |
| **app**/routes.js                  | Specify application end points/routes                        |
| **config**/auth.js                 | Set our keys and secrects here                               |
| **config**/database.js             | Set our database connection here                             |
| **config**/auth.js                 | Passport Local,twitter and Github strategies                 |
| **dist**/scripts.js                | Gulp produces minified version of all js files               |
| **test**/test.user.js              | test with Mocha and Chai                                     |
| **views**/index.ejs                | Landing page                                                 |
| **views**/login.ejs                | Login template                                               |
| **views**/mypolls.ejs              | Listing polls that are created by user                       |
| **views**/newpoll.ejs              | Create new poll                                              |
| **views**/polls.ejs                | Voting page with Chart                                       |
| **views**/profile.ejs              | Profile template                                             |
| **views**/signup.ejs               | Signup template                                              |
| .gitignore                         | Set files you would like to ignore                           |
| gulpfile.js                        | gulp for Automate and enhance your workflow                  |
| LICENSE                            | Apache License, Version 2.0, January 2004                    |
| package.json                       | NPM dependencies.                                            |
| README.md                          | About this repository                                        |
| server.js                          | The main application file.                                   |

List of Packages
----------------

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| bcrypt-nodejs                   | Library for hashing and salting user passwords.                       |
| body-parser                     | Express 4 middleware.                                                 |
| connect-flash                   | Provides flash messages for Express.                                  |
| cookies-parser                  | Parse Cookies                                                         |
| ejs                             | Template engine for Express.                                          |
| express                         | Node.js web framework.                                                |
| express-session                 | Express 4 middleware.                                                 |
| method-override                 | To override the req.method property with a new value                  |
| mongoose                        | MongoDB ODM.                                                          |
| morgan                          | Express 4 middleware.                                                 |
| passport                        | Simple and elegant authentication library for node.js                 |
| passport-github2                | Sign-in with GitHub plugin.                                           |
| passport-local                  | Sign-in with Username and Password plugin.                            |
| passport-twitter                | Sign-in with Twitter plugin.                                          |

Deployment
----------

Once you are ready to deploy your app, you will need to create an account with
a cloud platform to host it. These are not the only choices, but they are my top
picks. From my experience, **Heroku** is the easiest to get started with, it will
automatically restart your Node.js process when it crashes, zero-downtime
deployments and custom domain support on free accounts. Additionally, you can
create an account with **mLab** and then pick one of the *4* providers below.
Again, there are plenty of other choices and you are not limited to just the ones
listed below.

### 1-Step Deployment with Heroku

<img src="http://blog.exadel.com/wp-content/uploads/2013/10/heroku-Logo-1.jpg" width="200">
- Download and install [Heroku Toolbelt](https://toolbelt.heroku.com/)
- In terminal, run `heroku login` and enter your Heroku credentials
- From *your app* directory run `heroku create`
- Run `heroku addons:create mongolab`.  This will set up the mLab add-on and configure the `MONGOLAB_URI` environment variable in your Heroku app for you.
- Lastly, do `git push heroku master`.  Done!

**Note:** To install Heroku add-ons your account must be verified.

---

<img src="http://i.imgur.com/7KnCa5a.png" width="200">
- Open [mlab.com](https://mlab.com) website
- Click the yellow **Sign up** button
- Fill in your user information then hit **Create account**
- From the dashboard, click on **:zap:Create new** button
- Select **any** cloud provider (I usually go with AWS)
- Under *Plan* click on **Single-node (development)** tab and select **Sandbox** (it's free)
 - *Leave MongoDB version as is - `2.4.x`*
- Enter *Database name** for your web app
- Then click on **:zap:Create new MongoDB deployment** button
- Now, to access your database you need to create a DB user
- Click to the recently created database
- You should see the following message:
 - *A database user is required to connect to this database.* **Click here** *to create a new one.*
- Click the link and fill in **DB Username** and **DB Password** fields
- Finally, in `.env` instead of `mongodb://localhost:27017/test`, use the following URI with your credentials:
 - `db: 'mongodb://USERNAME:PASSWORD@ds027479.mongolab.com:27479/DATABASE_NAME'`

**Note:** As an alternative to mLab, there is also [Compose](https://www.compose.io/).


<img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Windows_Azure_logo.png" width="200">

- Login to [Windows Azure Management Portal](https://manage.windowsazure.com/)
- Click the **+ NEW** button on the bottom left of the portal
- Click **COMPUTE**, then **WEB APP**, then **QUICK CREATE**
- Enter a name for **URL** and select the datacenter **REGION** for your web site
- Click on **CREATE WEB APP** button
- Once the web site status changes to *Running*, click on the name of the web site to access the Dashboard
- At the bottom right of the Quickstart page, select **Set up a deployment from source control**
- Select **Local Git repository** from the list, and then click the arrow
- To enable Git publishing, Azure will ask you to create a user name and password
- Once the Git repository is ready, you will be presented with a **GIT URL**
- Inside your *Hackathon Starter* directory, run `git remote add azure [Azure Git URL]`
- To push your changes simply run `git push azure master`
 - **Note:** *You will be prompted for the password you created earlier*
- On **Deployments** tab of your Windows Azure Web App, you will see the deployment history

<img src="http://www.comparethecloud.net/wp-content/uploads/2014/06/ibm-bluemix_pr-030514.jpg" width="200">

- Go to [Codename: Bluemix](http://bluemix.net) to signup for the free trial, or login with your *IBM id*
- Install [Cloud Foundry CLI](https://github.com/cloudfoundry/cli)
- Navigate to your **hackathon-starter** directory and then run `cf push [your-app-name] -m 512m` command to deploy the application
 - **Note:** You must specify a unique application name in place of `[your-app-name]`
- Run `cf create-service mongodb 100 [your-service-name]` to create a [MongoDB service](https://www.ng.bluemix.net/docs/#services/MongoDB/index.html#MongoDB)
- Run `cf bind-service [your-app-name] [your-service-name]` to associate your application with a service created above
- Run `cf files [your-app-name] logs/env.log` to see the *environment variables created for MongoDB.
- Copy the **MongoDB URI** that should look something like the following: `mongodb://68638358-a3c6-42a1-bae9-645b607d55e8:46fb97e6-5ce7-4146-9a5d-d623c64ff1fe@192.155.243.23:10123/db`
- Then set it as an environment variable for your application by running `cf set-env [your-app-name] MONGODB_URI [your-mongodb-uri]`
- Run `cf restart [your-app-name]` for the changes to take effect.
- Visit your starter app at **http://[your-app-name].ng.bluemix.net**
- Done!

**Note:** Alternative directions, including how to setup the project with a DevOps pipeline are available at [http://ibm.biz/hackstart](http://ibm.biz/hackstart).
A longer version of these instructions with screenshots is available at [http://ibm.biz/hackstart2](http://ibm.biz/hackstart2).
Also, be sure to check out the [Jump-start your hackathon efforts with DevOps Services and Bluemix](https://www.youtube.com/watch?v=twvyqRnutss) video.

---

<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=64" width="64" align="left">

# Google Cloud Platform

- [Download and install Node.js](https://nodejs.org/)
- [Select or create](https://console.cloud.google.com/project) a Google Cloud Platform Console project
- [Enable billing](https://support.google.com/cloud/answer/6293499#enable-billing) for your project (there's a $300 free trial)
- Install and initialize the [Google Cloud SDK](https://cloud.google.com/sdk/docs/quickstarts)
- Create an `app.yaml` file at the root of your `hackathon-starter` folder with the following contents:

    ```yaml
    runtime: nodejs
    vm: true
    manual_scaling:
      instances: 1
    ```
- Make sure you've set `MONGODB_URI` or `MONGOLAB_URI` in `.env.example`
- Run the following command to deploy the `hackathon-starter` app:

    ```bash
    gcloud app deploy
    ```
- [Monitor your deployed app](https://console.cloud.google.com/appengine) in the Cloud Console
- [View the logs](https://console.cloud.google.com/logs/viewer) for your app in the Cloud Console


Changelog
---------

### 1.0.0 (13 March, 2017)
- First version of votapp

Contributing
------------

If something is unclear, confusing, or needs to be refactored, please let me know.
Pull requests are always welcome, but due to the opinionated nature of this
project, I cannot accept every pull request. Please open an issue before
submitting a pull request. This project uses
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with a
few minor exceptions.

License
-------

The MIT License (MIT)

Copyright (c) 2014-2016 Bilal Cagiran

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



### Rating :full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::new_moon:
### Difficulty :full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::new_moon:

### Bilal Cagiran  | [E-Mail](mailto:bcagiran@hotmail.com) | [Github](https://github.com/extwiii/) | [LinkedIn](https://linkedin.com/in/bilalcagiran) | [CodePen](http://codepen.io/extwiii/) | [Blog/Site](http://bilalcagiran.com) | [FreeCodeCamp](https://www.freecodecamp.com/extwiii) 

