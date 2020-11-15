const mongoose = require('mongoose');

const {Schema} = mongoose

const userSchema = new Schema({
    googleId: String,
    // displayName: String,
    // photos: [{value: String}],
    // emails: [{value: String}],
});

mongoose.model('users', userSchema)