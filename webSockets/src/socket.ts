import {Server} from 'socket.io';

export const io = new Server(8080, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log(`Connected ${socket.id}`);
    socket.on('disconnect', () => {
        console.log(`disconnected ${socket.id}`);
    });

    socket.on('message', (message) => {
        console.log(message);
    })
});
