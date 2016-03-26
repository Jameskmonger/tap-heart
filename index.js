'use strict';

var through = require('through2');
var parser = require('tap-parser');

var output = through();
var input = parser();

process.stdin.pipe(input);

input.on('assert', function (assert) {
    output.push('an assertion: ' + assert.ok + '\n');
});

output.pipe(process.stdout);
