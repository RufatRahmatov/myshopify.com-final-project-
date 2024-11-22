const express = require('express');
const {
    createMessage,
    getMessages,
    deleteMessage,
} = require('../controllers/messageController');

const router = express.Router();


router.post('/', createMessage);


router.get('/', getMessages);


router.delete('/:id', deleteMessage);

module.exports = router;
