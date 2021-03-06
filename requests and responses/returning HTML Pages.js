const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //Set response header content type
    res.setHeader('Content-Type', 'text/html');

    //Send an html file
    fs.readFile('./views/index.html', (err,data) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });

});

server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000');
});