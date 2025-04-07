const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conversationSchema = new Schema({
    type: { type: String, enum: ['single', 'group'] },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    name: String,
});
module.exports = mongoose.model('Conversation', conversationSchema);