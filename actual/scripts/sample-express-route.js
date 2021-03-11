const express = require('express');

const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/about', (req, res) => {
    res.send('<h1>About page.</h1>');
});

app.listen(3000, () => {
    console.log('Server started on port 3000...');
});