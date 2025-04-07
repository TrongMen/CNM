const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/chat/single', chatController.createSingleChat);
router.post('/chat/group', chatController.createGroupChat);
router.post('/message', chatController.sendMessage);

module.exports = router;