// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
var path = require('path');



module.exports = function (app) {
    // Route to home.html
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

    // Route to survey.html
    app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
}
