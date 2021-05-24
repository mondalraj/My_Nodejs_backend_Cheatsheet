const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url, req.method);
    //o/p -> /about GET
    
    //Set Header Content Type
    // res.setHeader('Content-Type', 'text/plain');
    // res.write("Hello World!");

    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>I'm Raj Mondal</h1>");
    res.end();
    //Nodejs will automatically create an html file with the following code.
});

server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000');
});