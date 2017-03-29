const getLongandLat = require('./getLongAndLat.js');
const request = require('request');

function getMap(cb){
  const LongandLat = getLongandLat(cb);
  const longitude = LongandLat.longitude;
  const latitude = LongandLat.latitude;
  const url = `https://api.wheretheiss.at/v1/coordinates/${latitude},${longitude}`;
  request(url, (err, res, body) => {
    if (err){
      cb(err);
    }
    let data = {};
    // handle if over the ocean
    if (body.status === 404){
      data = {
        countryCode: 'The Ocean';
        mapUrl: `https://maps.google.com/maps?q=${longitude},${latitude}&z=4`
      }
    } else {
      data = {
        countryCode: body.country_code,
        mapUrl: body.map_url,
      }
    }
  })
}
