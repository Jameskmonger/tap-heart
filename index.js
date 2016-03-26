'use strict';

var through = require('through2');
var parser = require('tap-parser');

var out = through();
var p = parser();

process.stdin.pipe(p);

p.on('assert', function (assert) {
    out.push('an assertion: ' + assert.ok + '\n');
});

out.pipe(process.stdout);
