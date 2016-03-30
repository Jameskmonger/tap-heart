#!/usr/bin/env node
'use strict';

var createReporter = require('./');

process.stdin
    .pipe(createReporter())
    .pipe(process.stdout);
