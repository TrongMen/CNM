const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    conversationId: { type: Schema.Types.ObjectId, ref: 'Conversation' },
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    type: { type: String, enum: ['text', 'image', 'video', 'icon'] },
    timestamp: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Message', messageSchema);