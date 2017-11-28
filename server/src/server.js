const io = require('socket.io')();

const port = 8000;
io.listen(port);
console.log('listening on port ', port);

io.on('connection', (socket) => {
    console.log("received connection");
    socket.join('0');

    //received events
    socket.on('action', (action) => {
        switch (action.type) {
            case 'message':
                let user = ""; //read user from DB using socket.handshake.decoded_token.email
                let action = {
                    type: 'message',
                    message: {
                        channel: data.channel,
                        user: user,
                        timestamp: new Date(),
                        content: data.text
                    }
                };
                //save to database
                //read from database
                io.to(action.message.channel).emit('action', action);
                break;

            default:
                break;
        }
    });

    // emits
    socket.emit('action', {
        type: 'init',
        data: {
            user: {
                id: 0,
                name: "rand",
                admin: false
            },
            users: [],
            channels: [
                {
                    key: 0,
                    name: "general",
                    messages: [
                    ]
                }
            ]
        }
    });
    io.to('0').emit('action', {
        type: 'message',
        message: {
            key: 0,
            channel: 0,
            user: 0,
            timestamp: new Date(),
            content: "Yo dawg!"
        }
    });
});