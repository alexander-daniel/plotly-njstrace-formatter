'use strict';

var PlotlyFormatter = require('../index.js');

var traceOptions = { 
	formatter: new PlotlyFormatter('alexander.daniel', 'yhs5fjlwin', 'njstrace-example', 5000) 
};

// Call inject and use plotly formatter in opts
var njstrace = require('njstrace').inject(traceOptions);

var Brou = require('./brouhaha.js');
var brou = new Brou();

// Do some stuff on "b"
setInterval(function run(){
    brou.haha(1000);
    brou.hehe(100000);
    brou.hoho(100000);
    brou.teehee(100000);
    brou.hahaha(100000);
    brou.hihihi(100000);
}, 1000);
