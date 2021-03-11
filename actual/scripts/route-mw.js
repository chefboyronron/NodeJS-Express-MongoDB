const e = require('express');
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const port = 3000;
const metaData = require('./meta-data.js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Executed in every request in the router
router.use((req, res, next) => {
    next();
});

router.get('/', (req, res) => {
    metaData.set({ 
        title : 'Home',
        ogImage : 'home.jpg', 
        keywords : 'homepage, express, middleware, ejs'
    }, res);
    res.render('middleware/route_mw');
});

router.get('/about', (req, res) => {
    metaData.set({ 
        title : 'About',
        ogImage : 'about.jpg', 
        keywords : 'about, express, middleware, ejs'
    }, res);
    res.render('middleware/route_mw');
});

router.get('*', (req, res) => {
    // Redirect to home page when no route attached
    metaData.set({ 
        title : 'Home',
        ogImage : 'home.jpg', 
        keywords : 'homepage, express, middleware, ejs'
    }, res);
    res.render('middleware/route_mw');
});

app.use(router);

app.listen(port, () => {
    console.log('Server listen to port:' + port);
});