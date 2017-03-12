# Votapp - Node.js

**Live Demo**:

Features
--------

- **Local Authentication** using Email and Password
- **passport Authentication** via Twitter, GitHub and can add many more with [passport.js](http://passportjs.org/)
- Node.js 
- Express
- Flash notifications
- MVC Project Structure
- mongoose
- nodemon
- morgan
- Gulp
- Mocha
- Bootstrap 3 

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

<hr>

### Rating :full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::new_moon:
### Difficulty :full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::new_moon:

### Bilal Cagiran  | [E-Mail](mailto:bcagiran@hotmail.com) | [Github](https://github.com/extwiii/) | [LinkedIn](https://linkedin.com/in/bilalcagiran) | [CodePen](http://codepen.io/extwiii/) | [Blog/Site](http://bilalcagiran.com) | [FreeCodeCamp](https://www.freecodecamp.com/extwiii) 


