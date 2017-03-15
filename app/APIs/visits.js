var Visit = require('../models/visit');


module.exports.listAll = function (req, res){
	Visit.find({}, function(err, results){
		logError(err);
		return res.json(results);
	});
};

module.exports.fetch = function (req, res){
	return fetchVisitsForGivenVisitor(req.params.contactNumber)
		.then((visitors) => {
			res.json(visitors);
		});
};

module.exports.create = function (req, res){

	return fetchVisitsForGivenVisitor(req.body.contactNumber)
		.then((visitor) => {
			var visit;
			if (!visitor || visitor.length === 0) {
				visit = new Visit(req.body);
			} else {
				visit = visitor[0];
				var currentVisit = new Visit(req.body);
				visit.visits.push(currentVisit.visits[0]);
			}
			
			visit.save(function(err, result){
				logError(err);
				return res.json(result);
			});
		});
};

function logError(err) {
	console.log(err);
}

function fetchVisitsForGivenVisitor(contactNumber){
	return new Promise((resolve, reject) => {
		Visit.find({contactNumber: contactNumber}, function(err, results){
			if (err) {
				logError(err);
				return reject(err);
			}			
			return resolve(results);
		});	
	});
}
