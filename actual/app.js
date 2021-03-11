const express = require('express');

const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(3000, () => {
    console.log('Server started on port 3000...');
});