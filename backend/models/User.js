const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    phone: String,
    email: String,
    firebaseUid: String,
    googleId: String,
    username: String,
    avatar: String,
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});
module.exports = mongoose.model('User', userSchema);