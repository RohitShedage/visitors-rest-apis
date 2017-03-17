var mongoose = require('mongoose');


var visitSchema = new mongoose.Schema({
	vehicleNumber: String,
	visitingToFlat: String,
	visitingPerson: String,
	purposeOfVisit: String,
	noOfVisitors: Number,
	entryGate: String,
	exitGate: String,
	entryTime: String,
	exitTime: String
}); 

module.exports = mongoose.model('Visit', {
	name: String,
	contactNumber: {type: String, required: true, unique: true},
	gender: String,
	identityType: String,
	identityNumber: String,
	photoId: String,
	societyName: String,
	visits:[visitSchema]
});
