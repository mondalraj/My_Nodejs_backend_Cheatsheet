const express = require('express');
const morgan = require('morgan');

//Requiring mongoose
const mongoose = require('mongoose');

//Importing the blog Module
const Blog = require('./models/blog');

const app = express();


//Connecting the mongoDB database
const dbURI = 'mongodb+srv://rajibmondal:mondal0210@cluster0.51smz.mongodb.net/node-tuts?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });

//All this .then(), .catch is because mongoose .connect is an async task.

//Register view engine
app.set('view engine', 'ejs');


//Static files Middleware
app.use(express.static('public'));


//mongoose and mongoDB sandbox routes.

//send blog to the database
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save() //This is again async task
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});
//This is send back to the browser once the action is completed i.e data is saved on DB.
// {"_id":"60ae77a9a8c4600b108f25cd","title":"new blog","snippet":"about my new blog","body":"more about my new blog","createdAt":"2021-05-26T16:30:33.040Z","updatedAt":"2021-05-26T16:30:33.040Z","__v":0}

//retrieve all the blogs from the database
app.get('/all-blogs', (req, res) => {

    Blog.find() //This is again async task
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});

//Retrieving a specific blog post
app.get('/single-blog', (req, res) => {

    Blog.findById('60ae7d85025f2123082f4824') //This is again async task
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});


//routes
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
