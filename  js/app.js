'use strict';

$(function() {
	// window.teach = {}
	// teach.paper = Raphael(300, 0, 900, 500);
	// teach.circle = teach.paper.circle(500, 100, 40);
	// teach.rect = teach.paper.rect(10, 100, 300, 200);

	var paper = Raphael("container", 1000, 1000);
	var rect = paper.rect(0, 0, 1000, 1000);

	//var c = paper.circle(400, 250, 20);

	var grid = function() {
		var position = 50;
		var height = 50;
		var width = 50;
		for (var i = 1; i <= 10; i++) {
			for (var j = 1; j <= 10; j++) {
				var r = paper.rect(position*i, position*j, width, height);
			}
		}
	};
	grid();
});

