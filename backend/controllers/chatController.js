const Conversation = require('../models/Conversation');
const Message = require('../models/Message');

exports.createSingleChat = async (req, res) => {
    const { userId, friendId } = req.body;
    const conversation = new Conversation({
        type: 'single',
        members: [userId, friendId],
    });
    await conversation.save();
    res.json(conversation);
};

exports.createGroupChat = async (req, res) => {
    const { userId, memberIds, name } = req.body;
    const conversation = new Conversation({
        type: 'group',
        members: [userId, ...memberIds],
        name,
    });
    await conversation.save();
    res.json(conversation);
};

exports.sendMessage = async (req, res) => {
    const { conversationId, senderId, content, type } = req.body;
    const message = new Message({ conversationId, sender: senderId, content, type });
    await message.save();
    res.json(message);
};