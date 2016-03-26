'use strict';

var through = require('through2');
var parser = require('tap-parser');

var out = through();
var p = parser();

p.on('assert', function (assert) {
    out.push('an assertion: ' + assert.ok + '\n');
});

process.stdin.pipe(p);
out.pipe(process.stdout);
