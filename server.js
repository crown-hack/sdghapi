"use strict"

var Hapi = require('hapi');
var cfenv = require("cfenv");

var appEnv = cfenv.getAppEnv();

// Create a server with a host and port
var server = new Hapi.Server();

server.connection({
   host:appEnv.host,
   port:appEnv.port
});

//Load plugins and start server
server.register([
  require('./routes/badges')
], (err) => {
  if (err) {
    throw err;
  }

  // Start the server
  server.start(() => {
     console.log('Server running at:', server.info.uri);
  });
});

