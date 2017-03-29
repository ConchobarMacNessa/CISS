const request = require('request');

function getLongandLat(cb){
  const url = 'https://api.wheretheiss.at/v1/satellites/25544';
  request(url, (err, res, body) => {
    if (err) {
      cb(err);
    }
    return {
      latitude: body.latitude,
      longitude: body.longitude,
      timestamp: body.timestamp,
    };
  });
};
