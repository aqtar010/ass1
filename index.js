var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello From Aqtar parveezzz');
});

app.get('/will', function (req, res) {
    res.send('Good Day');
});
app.get('/ready', function (req, res) {
    res.send('Hola');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
