var mongoose = require('mongoose');

module.exports = mongoose.model('Visit', {
	name: String,
	contactNumber: String,
	identityType: String,
	identiyNumber: String,
	noOfVisitors: Number
});
