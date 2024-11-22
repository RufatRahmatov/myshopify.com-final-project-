const Message = require('../models/messageModel');


exports.createMessage = async (req, res) => {
    try {
        const { name, email, phone, comment } = req.body;
        const message = await Message.create({ name, email, phone, comment });
        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ message: 'Failed to save message', error: error.message });
    }
};


exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch messages', error: error.message });
    }
};


exports.deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMessage = await Message.findByIdAndDelete(id);

        if (!deletedMessage) {
            return res.status(404).json({ message: 'Message not found' });
        }

        res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete message', error: error.message });
    }
};
