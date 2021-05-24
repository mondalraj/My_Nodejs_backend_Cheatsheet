const http = require('http');
const fs = require('fs');

//Importing lodash module
const _ = require('lodash');


const server = http.createServer((req, res) => {


    //lodash method example
    const random = _.random(20, 50);
    console.log(random);
    //This will generate random numbers between the 2 arguments whenever the website loads.

    const greet = _.once( () => {
        console.log("Hello!");
    });
    greet(); //This will run the function only once, this is again a lodash method
    greet();

    //Set response header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    //Changing the path based on the condition of url
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;

        //Redirection
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //Send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
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