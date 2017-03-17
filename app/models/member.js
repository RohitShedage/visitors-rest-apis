var mongoose = require('mongoose');


var familyMemberSchema = new mongoose.Schema({
    name: String,
    contactNumber: String,
    email: String,
    relationWithOwner: String,
    vehicleNumber: Number,
    photoId: String,
    bloodGroup: String
});

module.exports = mongoose.model('Member', {
    flatNumber: String,
    societyName: String,
    flatOwnerName: String,
    contactNumber: {type: String, required: true, unique: true},
    extn: String,
    emergencyContact: String,
    email: String,
    familyMembers:[familyMemberSchema]
});
