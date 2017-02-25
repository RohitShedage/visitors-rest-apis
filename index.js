var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var visit = cake = require('./app/APIs/visits');

mongoose.connect('mongodb://localhost/visitors');

app.listen(3000, function() {
	console.log('listening');
});

app.use(bodyParser());
app.post('/api/visits', visit.create);
app.get('/api/visits', visit.listAll);
app.get('/api/visits/:contactNumber', visit.fetch);

