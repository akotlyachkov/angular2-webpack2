const express = require('express'),
    app = express(),
    path = require('path'),
    config = require('../config.json'),
    minifyHTML = require('express-minify-html'),
    expressEngine = require('../build/server').expressEngine;

app.use('/styles', express.static(path.join(__dirname, '../build')));
app.use('/scripts', express.static(path.join(__dirname, '../build')));
app.use('/favicon', express.static(path.join(__dirname, 'favicon')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));



app.use('/', function (req, res) {

    let prodivers = [
        {provide: 'serverUrl', useValue: config.system.domain},
        {provide: 'expressRequest', useValue: req}
    ];

    app.engine('html', expressEngine(prodivers));
    app.set('view engine', 'html');
    app.set('views', path.join(__dirname, 'views'));
    app.use(minifyHTML({
        override: true,
        htmlMinifier: {removeAttributeQuotes: false}
    }));

    res.render('index', {req, res});
});


app.use(function (req, res, next) {
    console.error("сработало 404");
    //res.redirect('/error?url='+req.url);
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    err.userMessage = err.userMessage || 'На сервере произошла ошибка';
    if (res.status() == 200)
        res.status(500);
    res.send(err.userMessage);
});

module.exports = app;
