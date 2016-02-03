'use strict';

var Joi = require('joi');

exports.register = function(server, options, next) {

  var badges = [{
        id: 1,
        name: 'Collaborator'
    },
    {
        id: 2,
        name: 'Cloudquester'
    },
    {
        id: 3,
        name: 'Early Adopter'
    },
    {
        id: 4,
        name: 'Contributor'
    }
   ];

  server.route({
     method: 'GET',
     path: '/',
     handler: function(request, reply) {
      return reply('Welcome to Crown Hack Day.. ');
     }
  });

  server.route({
     method: 'GET',
     path: '/badges',
     handler: function(request, reply) {
      return reply(badges);
     }
  });

  return next();
};

exports.register.attributes = {
  name: 'routes-badges'
};

