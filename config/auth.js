// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'twitterAuth' : {
        'consumerKey'        : process.env.TWITTER_KEY,
        'consumerSecret'     : process.env.TWITTER_SECRET,
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'githubAuth': {
        'clientID'         : process.env.GITHUB_ID,
        'clientSecret'     : process.env.GITHUB_SECRET,
        'callbackURL'      : 'http://localhost:8080/auth/github/callback'
      }

};
