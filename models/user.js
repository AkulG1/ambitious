var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/loginDetails', { useNewUrlParser: true });

var userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Email Address cannot be left blank.'],
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        index: { unique: true, dropDups: true }
    },
    password: { type: String, required: [true, 'Password cannot be left blank.'] },


})
var User = mongoose.model('User', userSchema);
var john = new User({
    username: 'John',
    password: 'test'
});

john.save(function (err) {
    if (err) throw err;
    console.log('Person saved')
});

var jane = Person({
    username: 'Jane',
    password: 'test2'
});
jane.save(function (err) {
    if (err) throw err;
    console.log('Person saved')
})

module.exports = mongoose.model('Users', userSchema);
