/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-async-shim',
  included: function included (app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/async/dist/async.js');
    app.import('vendor/async.js', {
      exports: {
        Async: ['default']
      }
    });
  },
  isDevelopingAddon: function() {
    return true;
  }
};
