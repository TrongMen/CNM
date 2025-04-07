const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    media: String, // URL ảnh/video
    timestamp: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Post', postSchema);