var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;
var configDB = require('../config/db.js');

mongoose.connect('mongodb://AkulG:akul_g123@cluster0-shard-00-00-h4mvf.mongodb.net:27017,cluster0-shard-00-01-h4mvf.mongodb.net:27017,cluster0-shard-00-02-h4mvf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', { useNewUrlParser: true });

var userSchema = new Schema({
    local: {
        email: String,
        password: String,
    },
    facebook: {
        id: String,
        token: String,
        name: String,
        email: String
    },
    twitter: {
        id: String,
        token: String,
        displayName: String,
        username: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    }
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('Users', userSchema);
