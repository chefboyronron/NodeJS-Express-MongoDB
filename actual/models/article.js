let mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date, 
        default: Date.now
    }
});

let Article = module.exports = mongoose.model('Article', articleSchema);