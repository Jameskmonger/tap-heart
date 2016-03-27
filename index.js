'use strict';

var through = require('through2');
var parser = require('tap-parser');
var figures = require('figures');
var chalk = require('chalk');

var output = through();
var input = parser();

process.stdin.pipe(input);

var getAssertionMessage = function (assert) {
    if (assert.ok) {
        return chalk.green(figures.heart);
    }

    return chalk.red(figures.cross);
};

input.on('assert', function (assert) {
    output.push(getAssertionMessage(assert));
});

input.on('complete', function (results) {
    output.push('\n');
});

output.pipe(process.stdout);
