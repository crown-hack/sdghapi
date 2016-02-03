"use strict"

var Hapi = require('hapi');

var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();

// Create a server with a host and port
var server = new Hapi.Server();

server.connection({
    host: appEnv.host,
    port: appEnv.port
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {

        return reply('hello world');
    }
});

// Start the server
// Start the server
server.start(() => {
    console.log('Server running at:', server.info.uri);
});
