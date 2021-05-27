// Require Mongoose

const mongoose = require('mongoose');

//Making Schema
const Schema = mongoose.Schema;
//Schemas are the structure of the document that we are gonna store inside the collection.

//Schema is a constructor
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });


// Define the model based on the Schema
//Name of the model should be the singular of the collection name.

// This will automatically look for the blogs collection in the database, we don't have to specify this here
//It automatically pluralize the argument inside it.

const Blog = mongoose.model('Blog', blogSchema);

//To access this module in our project.
module.exports = Blog;