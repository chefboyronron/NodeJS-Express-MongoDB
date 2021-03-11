const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

var _titleSetter = (req, res, next) => {
    // assigning local variable using middleware function
    res.locals.title = 'Express Middleware';
    next();
}
app.use(_titleSetter);

// Set page meta data, I hope you get the point
const metaData = require('./meta-data.js');
app.use(metaData({ 
    ogImage : 'og.jpg', 
    keywords : 'express, middleware, ejs',
}));

app.get('/', (req, res) => {
    res.render('middleware/middleware');
});

app.listen(port, () => {
    console.log('Server listen to port:' + port);
});