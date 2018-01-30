var friends = require('../data/friends.js');

// Routes
// =============================================================
function apiRoutes(app) {
    // Search for Specific Character (or all characters) - provides JSON
    app.get("/api/friends", function (req, res) {
        console.log(res);
        return res.json(friends.friendData);
    });


    // Create New Characters - takes in JSON input
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        if (friends.friendData.length < 5) {
            friends.friendData.push(req.body);
            res.json(true);
        } else {
            friends.waitlist.push(req.body);
            res.json(false);
        }
    });
}


module.exports = apiRoutes;