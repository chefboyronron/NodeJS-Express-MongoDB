module.exports = (options) => {
    return (req, res, next) => {
        res.locals.ogImage = ( options.ogImage !== 'undefined' ) ? options.ogImage : 'default_image.jpg';
        res.locals.keywords = ( options.keywords !== 'undefined' ) ? options.keywords : 'default, keywords';
        next();
    }
}

module.exports.set = (options, res) => {
    res.locals.title = ( options.title !== 'undefined' ) ? options.title : 'Home';
    res.locals.ogImage = ( options.ogImage !== 'undefined' ) ? options.ogImage : 'default_image.jpg';
    res.locals.keywords = ( options.keywords !== 'undefined' ) ? options.keywords : 'default, keywords';
    return res;
}