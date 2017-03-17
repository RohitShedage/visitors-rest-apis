var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var visit = require('./app/APIs/visits');
var member = require('./app/APIs/members');

mongoose.connect('mongodb://visitors:rohitnikhil@ec2-35-154-72-194.ap-south-1.compute.amazonaws.com:27017/visitors');

app.listen(3000, function() {
	console.log('listening');
});

app.use(bodyParser());

// visits APIs
app.post('/api/visits', visit.create);
app.get('/api/visits', visit.listAll);
app.get('/api/visits/:contactNumber', visit.fetch);


//Member APIs
app.post('/api/members', visit.create);
app.get('/api/:societyName/members/:flatNumber', visit.fetch);
