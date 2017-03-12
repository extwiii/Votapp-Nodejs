# Votapp - Node.js
Demo :  

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


### Rating :full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::new_moon:
### Difficulty :full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::new_moon:

### Bilal Cagiran  | [E-Mail](mailto:bcagiran@hotmail.com) | [Github](https://github.com/extwiii/) | [LinkedIn](https://linkedin.com/in/bilalcagiran) | [CodePen](http://codepen.io/extwiii/) | [Blog/Site](http://bilalcagiran.com) | [FreeCodeCamp](https://www.freecodecamp.com/extwiii) 


