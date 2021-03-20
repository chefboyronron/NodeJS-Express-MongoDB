// Modules
let path = require('path');
let express = require('express');
let app = express();
const bodyParser = require('body-parser');
let mongoose = require('mongoose');

//Model
const ArticleModel = require('../../models/article');

// Controlers
const Homepage = require('./home');
const Addpage = require('./add');

// Variables initialization
let port = 3000;
let viewsDir = '../../views/nodedb';
let templateEngine = 'ejs';

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

// Set view endige template
app.set('view engine', templateEngine);
app.set('views', path.join(__dirname, viewsDir));

// Body Parser
let bodyparser = {
    jsonParser: bodyParser.json(),
    urlEncodeParser: bodyParser.urlencoded({extended: false})
}

// Homepage Controller
let home = new Homepage(app);
// Add Page Controller
let addPage = new Addpage(app, bodyparser);

// Handle not unusual routes - work around
app.get('*', (req, res, next) => {
    ArticleModel.find({}, (err, articles) => {
        if( err ) {
            console.log(err);
        } else {
            res.render(viewsDir + '/index', {
                title: 'Add Article',
                articles: articles
            });
        }
    });
});

app.listen(port, () => {
    console.log('Server listen to port:' + port);
});