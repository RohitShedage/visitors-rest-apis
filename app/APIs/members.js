var Member = require('../models/member');

module.exports.fetch = function (req, res){
    return fetchMembersForGivenFlat(req.params.societyName, req.params.flatNumber)
        .then((member) => {
            return res.json(member);
        });
};

module.exports.create = function (req, res){
    var member = new Member(req.body);

    return member.save(function(err, result){
        logError(err);
        return res.json(result);
    });

};

function logError(err) {
    console.log(err);
}

function fetchMembersForGivenFlat(contactNumber){
    return new Promise((resolve, reject) => {
        Member.find({contactNumber: contactNumber}, function(err, results){
            if (err) {
                logError(err);
                return reject(err);
            }
            return resolve(results);
        });
    });
}
