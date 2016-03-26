'use strict';

var parser = require('tap-parser');

var p = parser();

process.stdin.pipe(p);
