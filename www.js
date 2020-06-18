var express = require('express');
var app = express();
var http = require('http');
var compression = require('compression');
var port = process.env.PORT || '3118';

app.use(compression());
app.use(express.static('./build'));
app.set('port', port);

var server = http.createServer(app);
server.listen(port);

server.on('listening', onListening);

function onListening() {
    console.log(`server port ${port} listening ....`);
    console.log(`http://localhost:${port}`);
}

