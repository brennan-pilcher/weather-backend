var express = require('express');
var router = express.Router();
var request = require('request');

/* GET weather by zip code. */
router.get('/zip/:zip', function(req, res, next) {

  request('https://api.openweathermap.org/data/2.5/forecast?zip=' + req.params.zip + ',us&units=kelvin&APPID=' + process.env.APIKEY, { json: true }, (err, resp, body) => {
    if (err) { return console.log(err); } // else { console.log(resp) }

    res.json(body);
  });

});

/* GET weather by latitude and longitude. */
router.get('/latlong/:latlong', function(req, res, next) {

  request('https://api.openweathermap.org/data/2.5/forecast?' + req.params.latlong + '&units=kelvin&APPID=' + process.env.APIKEY, { json: true }, (err, resp, body) => {
    if (err) { return console.log(err); }

    res.json(body);
  })

});


/* GET wakeup ping */
router.get('/wake', function(req, res, next) {
  res.send("Server woken up");
});



router.get('/', function(req, res, next) {
  res.send("invalid request");
});

module.exports = router;
