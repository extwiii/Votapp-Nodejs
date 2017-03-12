var Poll       = require('./models/poll');

module.exports = function(app, passport) {


// normal routes ===============================================================
    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
      Poll.find({}, function(err, polls) {
        res.render('index.ejs',{
            polls : polls,
            user : req.user
        });
      });
    });
    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

/////////////////////////////////////////////// POLL  MECHANISM //////////////////////////////////////////////
    app.get('/newpoll', isLoggedIn, function(req,res){
        res.render('newpoll.ejs',{
            user : req.user
        });
    })

    app.post('/newpoll', function(req,res){
      // asynchronous
      process.nextTick(function() {
          // if the user is not already logged in:
          if (req.user) {
            // create the poll
            var newPoll            = new Poll();
            newPoll.id             = req.user._id;
            newPoll.title          = req.body.title;
            newPoll.options        = setOptions(req.body.options.split('\r\n'));

            newPoll.save( function(err){
              if (err) throw err;
              console.log('Poll saved successfully!' );
              res.redirect('/polls/' + newPoll._id);
            });
          }
      });
    })

    app.get('/polls/:id', function(req,res){

      // asynchronous
      process.nextTick(function() {
          // if the user is not already logged in:
          if (req.params.id) {
            Poll.findOne({ '_id' :  req.params.id }, function(err, poll) {
                // if there are any errors, return the error
                if (err) throw err;
                // check to see if theres already a user with that email
                if (poll) {
                    res.render('polls.ejs',{
                      user : req.user,
                      poll : poll,
                      url : req.url
                    });
                } else {
                  res.redirect('/newpoll')
                }
            });
          }
      });
    })

    app.post('/polls/:id', function(req,res){
      // asynchronous
      process.nextTick(function() {
        if(req.body.opt){
          var idx = req.body.opt.slice(7, 31)

          Poll.findOne({ 'options._id' : idx }, function(err, poll) {
              // if there are any errors, return the error
              if (err) throw err;
              for(var i=0; i< poll.options.length;i++){
                if(String(poll.options[i]._id) === idx){
                  poll.options[i].vote++;
                }
              }
              poll.save( function(err){
                if (err) throw err;
                console.log('Vote saved successfully!' );
                res.redirect(req.url);
              });
          });
        }
      });
    })

    app.get('/polls/:id/remove', function(req,res){
      // asynchronous
      process.nextTick(function() {
          // if the user is not already logged in:
          if (req.params.id) {
            Poll.remove({ '_id' :  req.params.id }, function(err, poll) {
                // if there are any errors, return the error
                if (err) throw err;
                // check to see if theres already a user with that email
                if (poll) {
                    res.redirect('/mypolls')
                } else {
                  res.redirect('/')
                }
            });
          }
      });
    })


    app.get('/mypolls',isLoggedIn, function(req,res){
      // asynchronous
      process.nextTick(function() {
        Poll.find({ 'id' :  req.user._id }, function(err, poll) {
            // if there are any errors, return the error
            if (err) throw err;

            // check to see if theres already a user with that email
            if (poll) {
                res.render('mypolls.ejs',{
                  poll : poll
                });
            } else {
              res.redirect('newpoll')
            }
        });
      });
    })


/////////////////////////////////////////////// POLL  MECHANISM //////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////// LOGOUT  MECHANISM //////////////////////////////////////////////
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
/////////////////////////////////////////////// LOGOUT  MECHANISM //////////////////////////////////////////////

//////////////////////////////////////////////////LOGIN MECHANISM //////////////////////////////////////////////
        // locally --------------------------------
        // LOGIN ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render('login.ejs', { message: req.flash('loginMessage') });
        });

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('signupMessage') });
        });

        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

    // twitter --------------------------------

        // send to twitter to do the authentication
        app.get('/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));

        // handle the callback after twitter has authenticated the user
        app.get('/auth/twitter/callback',
            passport.authenticate('twitter', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));


    // github ---------------------------------

        // send to google to do the authentication
        app.get('/auth/github', passport.authenticate('github', { scope : 'email' }));

        // the callback after google has authenticated the user
        app.get('/auth/github/callback',
            passport.authenticate('github', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

//////////////////////////////////////////////////LOGIN MECHANISM //////////////////////////////////////////////

};


// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/login');
}

// set option votes to 0
function setOptions (array){
  console.log('------'+array)
  var tempObj = {};
  var tempArr = [];
    for(var i=0;i<array.length; i++){
      console.log(array[i].length)
        if(!array[i])
        continue;
        tempObj.name = array[i];
        tempObj.vote = 0;
        tempArr.push(tempObj);
        tempObj = {};
    }
    console.log(array);
    return tempArr;
}
