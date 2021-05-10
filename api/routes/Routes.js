'use strict';
module.exports = function(app) {

  var controller = require('../controllers/AvalancheController');

  app.route('/create_keys')
    .post(controller.create_keys);

  app.route('/sign_tx')
    .post(controller.sign_tx);

};
