var http = require('http');
var express = require('express');
var port=process.env.PORT || 8081;
var app = express();
var appRoutes = require('./routes/appRoutes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');


mongoose.connect('mongodb+srv://krupa:TBVZywLZPjTBDAtR@cluster0.pcswp.gcp.mongodb.net/countries?retryWrites=true&w=majority');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', appRoutes);
http.createServer(app).listen(port);


console.log("backend running on port:",port);

function newFunction() {
    return require('process');
}
