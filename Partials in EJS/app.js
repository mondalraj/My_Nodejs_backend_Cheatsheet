const express = require('express');

const app = express();

//Register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews') -> Changing default path of view engine

app.listen(3000);

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

// app.get('/about-us', (req, res) => {
//     res.redirects('/about');
// });

app.use((req, res) => {
    res.status(404).render('404', { title: 'Error' });
});
