const socketIo = require('socket.io');

module.exports = function (server) {
    const io = socketIo(server);

    io.on('connection', (socket) => {
        console.log('A user connected');

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });

        socket.on('chat message', (msg) => {
            io.emit('chat message', msg); // Broadcast to all users

            // Example: Sending a private message to the sender
            socket.emit('chat message', 'You: ' + msg);

            // Example: Sending a private message to all other users
            socket.broadcast.emit('chat message', 'User: ' + msg);
        });
    });
};
