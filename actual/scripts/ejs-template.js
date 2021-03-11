const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.get('/', (req, res) => {
    // assign template variable
    res.locals.title = 'Home page';
    res.render('index');
});

app.listen(port, () => {
    console.log('Server listen to port:' + port);
});