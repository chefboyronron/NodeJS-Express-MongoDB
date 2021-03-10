const express = include('express');

const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('Hello wirld');
});

// This will start the web server in port 3000
app.listen(3000, () => {
    console.log('Server started on port 3000...');
});