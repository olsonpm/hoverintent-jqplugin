var $ = require('jquery');

require('../../dist/hoverintent.js')($);

$(document).ready(function() {
  $('li').hoverIntent({
    over: makeTall
    , out: makeShort
    , timeout: 2000
  });
  console.log('success');


  function makeTall(){$(this).animate({"height":150},200);}
  function makeShort(){$(this).animate({"height":100},200);}
})
