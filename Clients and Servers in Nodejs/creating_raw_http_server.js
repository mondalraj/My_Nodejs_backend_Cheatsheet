const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello Client');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('Listening for request on port 3000');
});