'use strict';
module.exports = function(app) {

  var controller = require('../controllers/AvalancheController');

  app.route('/create_keys')
    .post(controller.create_keys);

  app.route('/send_avax')
    .post(controller.send_avax);

};
