server.route({
  method: 'GET',
  path: '/sdghack',
  handler: function(request, reply) {

    return reply('Welcome to Software Dev Hack Day...');
    }

});
