const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Extrair o servidor http criando com o express
const server = require('http').Server(app);
// habilitar que o sever ouça tambem o protocolo WS, do websocket, além do http comum
const io = require('socket.io')(server);

mongoose.connect('mongodb://localhost:27017/twitterweek', {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;
    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log('Server started on port 3000');
});