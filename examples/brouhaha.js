'use strict';

module.exports = Brou;

// Just a fake processing module.
// brou-haha!

function Brou() {
}

Brou.prototype.haha = function (max) {
	var bigObj = {};
	for (var i = 1; i < max; i ++) {
		var obj = {
			x: Math.random() * 100 / i,
			y: Math.random() * 100 * i,
		};
		bigObj[obj.x] = obj;
	}
	console.log(bigObj);
	return bigObj;
};

Brou.prototype.hehe = function (max) {
	var array = [];
	for (var i = 0; i < max; i++) {
		var x = Math.random() * 1000 / 4 * i;
		var y = Math.random() * Math.random() / i;
		array.push([x * x / i, y * y * i]);
	}
	return array;
};

Brou.prototype.hoho = function (max) {
	var array = [];
	for (var i = 0; i < max; i++) {
		var x = Math.random() * 1000 / (4/i) * i;
		var y = Math.random() * Math.random() / i;
		array.push([x * x / i, y * y * i]);
	}
	return array;
};

Brou.prototype.teehee = function (max) {
	var array = [];
	for (var i = 0; i < max; i++) {
		var x = Math.random() * 1000 / 8 * i;
		var y = Math.random() * Math.random() / i;
		array.push([x / x / i, y / y / i]);
	}
	return array;
};

Brou.prototype.hahaha = function (max) {
	var array = [];
	for (var i = 0; i < max; i++) {
		var x = Math.random() * 1000 / 8 * i;
		var y = Math.random() * Math.random() / i;
		array.push([x / x / i, y / y / i]);
	}
	return array;
};

Brou.prototype.hihihi = function (max) {
	var array = [];
	for (var i = 0; i < max; i++) {
		var x = Math.random() * 1000 / 8 * i;
		var y = Math.random() * Math.random() / i;
		array.push([x / x / i, y / y / i]);
	}
	return array;
};
