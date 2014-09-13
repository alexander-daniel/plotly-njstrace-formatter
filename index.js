'use strict';

// Get a reference to njstrace default Formatter class
var Formatter = require('njstrace/lib/formatter.js');

module.exports = PlotlyFormatter;

function  PlotlyFormatter(username, apiKey, fileName, interval, layout) {
    var _this = this;
    _this.plotly = require('plotly')(username, apiKey);

    _this.initData = [{
        x: [],
        y: [],
        type: 'bar',
        stream: {
            token: 'm0qcrz4sy7',
            maxpoints: 200000
        }
    }];
    
    var defaultLayout = {
            title: '',
            showlegend: false,
            yaxis: {
                title: 'total time spent in function (ms)'
            },
            xaxis: {
                title: ''
            },
            margin: {
                l: 100, 
                r: 100, 
                b: 150, 
                t: 25, 
                pad: 4
            }
        };

    _this.initLayout = layout || defaultLayout;

    _this.initGraphOptions = {
        fileopt : 'overwrite',
        filename : fileName,
        layout: _this.initLayout
    };

    _this.stream = null;
    _this.data = {};

    setInterval(function () {
        _this.plotlyData = [];
        Object.keys(_this.data).forEach(function (fnName) {
            var fnData = _this.data[fnName];
            //console.log(fnData);
            var trace = {
                'x': fnData.x,
                'y': fnData.y,
                'type': 'bar'
            };
            if (fnData.y <= 0) return;
            _this.plotlyData.push(trace);
        });
        
        _this.plotly.plot(_this.plotlyData, _this.initGraphOptions, function (err, msg) {
            //console.log(msg);
            if (err) return console.log(err);
        });

    }, interval);
    
    
}
// But must "inherit" from Formatter
require('util').inherits(PlotlyFormatter, Formatter);

// Called whenever tracer enters a user function
PlotlyFormatter.prototype.onEntry = function(args) {

};

// Called whenever tracer exits a user function
PlotlyFormatter.prototype.onExit = function(args) {
    var _this = this;
    var filenameArray = args.file.split('/');
    var filename = filenameArray[filenameArray.length - 1];
    var fileFunctionName = filename + '/' + args.name;
    console.log(fileFunctionName + ' : ' + args.span);
    //console.log(args.name + '||' + args.file +'||'+ args.span);

    if (!_this.data[fileFunctionName]) {
        _this.data[fileFunctionName] = {
            'x': fileFunctionName, 
            'y': 0
        };
    }
    _this.data[fileFunctionName].y += parseInt(args.span);
};
