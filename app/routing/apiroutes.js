var friends = require('../data/friends.js');

// Routes
// =============================================================
module.exports = function (app) {
    // Search for Specific Character (or all characters) - provides JSON
    app.get("/api/friends", function (req, res) {
        // console.log(res);
        res.json(friends);
        console.log(friends);
    });


    // Create New Characters - takes in JSON input
    app.post("/api/friends", function (req, res) {
        var friends = req.body;
        console.log(friends);
        // convert the 'scores[]' array into an array of integers and assign it to a properly named property on the object
        friends.scores = friends['scores[]'].map(function (score) { return parseInt(score); });
        // delete the badly named property
        delete friends['scores[]'];

        // if (friends.friendData.length < 5) {
        //     friends.friendData.push(req.body);
        //     res.json(true);
        // } else {
        //     friends.waitlist.push(req.body);
        //     res.json(false);
        // }
    });
}