// config/database.js
module.exports = {

    'url' : process.env.MONGO_VOTING || 'mongodb://localhost/votapp'
};
