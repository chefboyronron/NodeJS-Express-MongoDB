# Database and collection setup

## Create database and collection
1. `use nodedb`
2. `db.createCollection('articles')`

## Insert document in the articles collection
```javascript
db.articles.insert({
    title: "Article One",
    author: "Ron Seminiano",
    body: "This is the article one content.",
    timestamp: Date()
})

db.articles.insert({
    title: "Article Two",
    author: "Kyle Seminiano",
    body: "This is the article two content.",
    timestamp: Date()
})

// Check if inserted
db.articles.find().pretty()
```

## Install Mongoose and Connect to Database

1. `npm install --save mongoose`
    - NOTE: make sure you are inside your node application
    - FOR MORE INFO visit: [MongooseJS Page](https://mongoosejs.com/)

2. Create Schema
    - [Article Scehma](https://github.com/chefboyronron/NodeJS-Express/blob/master/actual/models/article.js)

3. Connect to MongoDB

```javascript
let mongoose = require('mongoose');
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
```

## Creating Models

1. Create models directory on your app directory
2. Create articles.js file
3. You can check this in actual file content for including model
    - [The Functionalities](https://github.com/chefboyronron/NodeJS-Express/blob/master/actual/scripts/nodedb/app.js)

## The Files
1. [app.js](https://github.com/chefboyronron/NodeJS-Express/blob/master/actual/scripts/nodedb/app.js)
2. [article model](https://github.com/chefboyronron/NodeJS-Express/blob/master/actual/models/article.js)
3. [template - ejs](https://github.com/chefboyronron/NodeJS-Express/blob/master/actual/views/nodedb/index.ejs)