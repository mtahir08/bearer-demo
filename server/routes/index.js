module.exports = function (app, mongoose) {


    /**
     * GET HOME PAGE
     *
     * */
    app.get('/', function (req, res, next) {
        console.log('route', _dirname);
        res.sendFile('index.html');
    });


};