//Creating an express app

const express = require('express');

//express app
const app = express();

//listen for requests
app.listen(3000); //Automatically listen on localhost

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');
    res.sendFile('./views/index.html', { root: __dirname});
});

app.get('/about', (req, res) => {
    // res.send('<p>Home Page</p>');
    res.sendFile('./views/about.html', { root: __dirname});
});


// redirects

app.get('/about-us', (req, res) => {
    res.redirects('/about');
});


// 404 page

app.use((req, res) => {
    // res.sendFile('./views/404.html', { root: __dirname});

    res.status(404).sendFile('./views/404.html', { root: __dirname});
});
//Express reads the code from top to bottom, it will check all get methods one by one if it doesn't find the request url then it will hit this use method.