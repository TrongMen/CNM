const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

connectDB();

io.on('connection', (socket) => {
    socket.on('join', (conversationId) => socket.join(conversationId));
    socket.on('sendMessage', async (data) => {
        const message = await require('./controllers/chatController').sendMessage({ body: data });
        io.to(data.conversationId).emit('newMessage', message);
    });
});

server.listen(3000, () => console.log('Server running on port 3000'));