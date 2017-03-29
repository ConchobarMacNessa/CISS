const getLongandLat = require('../getLongAndLat.js');

function serveAPI(request, response) {
  getLongandLat();
}

module.exports = serveAPI;
