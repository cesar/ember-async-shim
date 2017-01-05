(function () {
  /* globals define, async */
  function generateModule (name, values) {
    define(name, [], function () {
      'use strict';
      return values;
    });
  }
  generateModule('async', { default: async });
})();
