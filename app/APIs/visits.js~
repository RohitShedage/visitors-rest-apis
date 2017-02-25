var Visit = require('../models/visit');

module.exports.listAll = function (req, res){
	Visit.find({}, function(err, results){
		logError(err);
		return res.json(results);
	});
}

module.exports.fetch = function (req, res){
	Visit.find({contactNumber: req.params.contactNumber}, function(err, results){
		logError(err);
		return res.json(results);
	});
}

module.exports.create = function (req, res){
	var visit = new Visit(req.body);
	visit.save(function(err, result){
		logError(err);
		return res.json(result);
	});
}

function logError(err) {
	if(err){
		console.log(err);
	}
}
