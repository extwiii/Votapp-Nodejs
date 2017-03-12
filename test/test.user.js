var chai = require('chai');
var should = chai.should();
var mongoose = require('mongoose');
    mongoose.Promise = Promise;
var Account = require("../app/models/user.js");
var db;



describe('Account', () => {

 before((done) => {
   // test mongo database for only test purposes
 db = mongoose.connect('mongodb://extwiii:extwiii@ds115110.mlab.com:15110/node-test');
   done();
 });

 after((done) => {
   mongoose.connection.close()
   done();
 });

 beforeEach((done) => {
  var account = new Account({
      'local.email'        : 'test@test.com',
      'local.password'     : 'testy'
  });
  account.save((error) => {
    if (error) console.log('error' + error.message);
    done();
   });
 });

 it('find a user by username', (done) => {
    Account.findOne({ 'local.email': 'test@test.com' }, function(err, account) {
      account.local.email.should.eql('test@test.com');
      console.log("   mail: ", account.local.email)
      done();
    });
 });

 it('find a user by password', (done) => {
    Account.findOne({ 'local.password': 'testy' }, function(err, account) {
      account.local.password.should.eql('testy');
      console.log("   mail: ", account.local.password)
      done();
    });
 });

 afterEach((done) => {
    Account.remove({}, function() {
      done();
    });
 });

});
