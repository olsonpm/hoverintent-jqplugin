'use strict';

var $ = require('jquery');
var assert = require('chai').assert;

try {
    require('./hoverIntent.js')($);
    assert.ok($.fn.hoverIntent);
    console.log('cjs test successful');
} catch (e) {
    console.log(e);
    console.log(e.stack);
}

phantom.exit();
