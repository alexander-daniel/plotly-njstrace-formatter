## A quick and easy way to send your module tracing information to Plotly.
This formatter will output a bar chart with each bar representing the time spent in each function. Functions are labelled with the file they were called from.

###Usage
```javascript
var PlotlyFormatter = require('plotly-njstrace');

var traceOptions = { 
	formatter: new PlotlyFormatter('username', 'apiKey', 'graph name', 5000) 
};

// Call inject and use plotly formatter in opts
var njstrace = require('njstrace').inject(traceOptions);

var Brou = require('./examples/brouhaha.js');
var brou = new Brou();

// Do some stuff on "b"
setInterval(function run(){
    brou.haha(1000);
    brou.hehe(10000);
    brou.hoho(1000);
    brou.teehee(1000000);
    brou.hahaha(10000);
    brou.hihihi(1000);
}, 1000);
```

#### Outputs
Click [here](https://plot.ly/~alexander.daniel/33) for the interactive graph.
![Output](readme.png)


### PlotlyFormatter(username, apiKey, graphName, interval, layout)	
- `username` is your Plotly username
- `apiKey` is your Plotly api key
- `graphName` is your desired graph name
- `interval` is the frequency to post your data to plotly (default 5s)
- `layout` **optional** is a Plotly layout object (default used if none specified)

