//Creating an express app

const express = require('express');

//express app
const app = express();

//listen for requests
app.listen(3000); //Automatically listen on localhost

app.get('/', (req, res) => {
    res.send('<p>Home Page</p>');
});