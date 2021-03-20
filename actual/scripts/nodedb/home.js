let ArticleModel = require('../../models/article');

class HomePage {

    constructor(App) {
        this.segment = '/';
        this.app = App;
        this.template = App.settings.views + '/index';
        this.route();
    }

    route = () => {
        this.app.get(this.segment, (req, res, next) => {
            // Render articles in the template
            ArticleModel.find({}, (err, articles) => {
                if( err ) {
                    console.log(err);
                } else {
                    res.render(this.template, {
                        title: 'Articles',
                        articles: articles
                    });
                }
            });
        });
    }

}

module.exports = HomePage;