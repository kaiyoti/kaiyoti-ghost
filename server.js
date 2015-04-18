// Perform self ping if it's on single Dyno
require('heroku-self-ping')('http://kaiyoti-ghost.herokuapp.com');

var path = require('path');
var ghost = require('ghost');

ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
  ghostServer.start();
});
