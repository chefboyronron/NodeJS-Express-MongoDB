let express = require('express');
let path = require('path');
let app = express();
let port = 3000;

let mongoose = require('mongoose');
// Connect to database
mongoose.connect('mongodb://localhost/nodedb', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});
let db = mongoose.connection;

// Check connection
db.once('open', () => {
    console.log('connected to MongoDB');
});

// Check db error
db.on('error', (err) => {
    console.log(err);
});

// Include Model
let Article = require('../../models/article');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../views/nodedb'));

app.get('/', (req, res, next) => {
    // Render articles in the template
    Article.find({}, (err, articles) => {
        if( err ) {
            console.log(err);
        } else {
            res.render('../../views/nodedb/index', {
                title: 'Articles',
                articles: articles
            });
        }
    });
});

app.listen(port, () => {
    console.log('Server listen to port:' + port);
});