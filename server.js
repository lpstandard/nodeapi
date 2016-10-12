var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Bear = require('./app/models/bear');

mongoose.connect('mongodb://lpstandard:PgB-pFm-k8h-ayd@ds053206.mlab.com:53206/apidesign'); // connect to our database

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();  // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);