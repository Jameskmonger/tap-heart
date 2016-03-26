'use strict';

var through = require('through2');
var parser = require('tap-parser');
var figures = require('figures');

var output = through();
var input = parser();

process.stdin.pipe(input);

var getAssertionMessage = function (assert) {
    if (assert.ok) {
        return figures.heart;
    }

    return 'X';
};

input.on('assert', function (assert) {
    output.push(getAssertionMessage(assert));
});

output.pipe(process.stdout);
