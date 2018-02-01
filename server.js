// Routing
var apiRoutes = require('./app/routing/apiroutes.js');
var htmlRoutes = require('./app/routing/htmlRoutes.js');

//Dependencies
var express = require('express');
var bodyParser = require('body-parser');

//Express App
var app = express();
var PORT = process.env.PORT || 3000;

apiRoutes(app);
htmlRoutes(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});