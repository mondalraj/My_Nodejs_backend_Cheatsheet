const express = require('express');
const morgan = require('morgan');


const app = express();

//Register view engine
app.set('view engine', 'ejs');

app.listen(3000);


//Static files Middleware
app.use(express.static('public'));

//*****Creating a custom Middleware*****

// app.use((req, res, next) => {
// console.log('New Request Made');
// console.log('Host: ', req.hostname);
// console.log('Path: ', req.path);
// console.log('method: ', req.method);
// next();
// })

// app.use((req, res, next) => {
//     console.log('In the next Middleware');
//     next();
//     })


//                  **************



//Using Morgan -> 3rd Party Middleware
app.use(morgan('dev'));
//o/p-> in terminal -> GET /about 304 16.246 ms - -
//dev is a formatter, there are others as well with different functionality, you have to see the documentation.

// app.use(morgan('tiny'));
//o/p-> GET /about 304 - - 16.612 ms


app.get('/', (req, res) => {

    //Creating more complex dynamic data using EJS
    //an array of blogs
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ];

    //Render a view 
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create New Blog' });
});

//404 pages -> It should be at the bottom
app.use((req, res) => {
    res.status(404).render('404', { title: 'Error' });
});
