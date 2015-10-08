'use strict';

phantom.injectJs('./jquery.js');
var assert = require('chai').assert;

try {
    require('./hoverIntent.js')(window);
    assert.ok(window.jQuery.fn.hoverIntent);
    console.log('global test successful');
} catch (e) {
    console.log(e);
    console.log(e.stack);
}

phantom.exit();
