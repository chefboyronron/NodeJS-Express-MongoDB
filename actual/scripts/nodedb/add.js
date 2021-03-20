let ArticleModel = require('../../models/article');

class AddPage {

    constructor(App, bodyParser) {
        this.segment = '/add';
        this.app = App;
        this.bodyParser = bodyParser;
        this.template = App.settings.views + this.segment;
        this.route.get();
        this.route.post();
    }

    route =  {
        get: () => {
            this.app.get(this.segment, (req, res, next) => {
                res.render(this.template, {
                    title: 'Add Article'
                });
            });
        },
        post: () => {

            this.app.post(this.segment, this.bodyParser.urlEncodeParser, (req, res, next) => {
                let article = new ArticleModel();
                let date = new Date();
                article.title = req.body.title;
                article.author = req.body.author;
                article.body = req.body.body;
                article.timestamp = date;

                article.save((err)=>{
                    if( err ) {
                        console.log(err);
                        return;
                    } else {
                        res.redirect('/');
                    }
                });
            });
        },
    }

}

module.exports = AddPage;