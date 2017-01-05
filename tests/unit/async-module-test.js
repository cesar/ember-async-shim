import { module, test } from 'qunit';
import Async from 'async';

module('async as an ES6 module');

test('imported correctly', function (assert) {
  assert.ok(Async);
});
