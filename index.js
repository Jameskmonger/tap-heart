'use strict';

var parser = require('tap-parser');

var p = parser();

p.on('assert', function (assert) {
    console.log(assert);
});

process.stdin.pipe(p);
