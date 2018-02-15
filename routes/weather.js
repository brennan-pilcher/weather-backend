var express = require('express');
var router = express.Router();
var request = require('request');

/* GET weather by zip code. */
router.get('/zip/:zip', function(req, res, next) {

  let weatherData = {
    city : {},
    currentWeather : {},
    currentMain : {},
    currentTime : "",
  };

  // console.log(req.params.zip);

  request('https://api.openweathermap.org/data/2.5/forecast?zip=' + req.params.zip + ',us&units=imperial&APPID=' + process.env.APIKEY, { json: true }, (err, resp, body) => {
    if (err) { return console.log(err); } // else { console.log(resp) }
    //console.log(body);

    // // Current weather data
    // weatherData.currentWeather = body.list[0].weather;
    // weatherData.currentMain = body.list[0].main;
    // weatherData.currentTime = body.list[0].dt_txt;
    // weatherData.city = body.city;

    res.json(body);
  });




});



router.get('/', function(req, res, next) {
  res.send("invalid request");
});

module.exports = router;
