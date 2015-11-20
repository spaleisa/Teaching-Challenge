'use strict';

$(function() {
	// window.teach = {}
	// teach.paper = Raphael(300, 0, 900, 500);
	// teach.circle = teach.paper.circle(500, 100, 40);
	// teach.rect = teach.paper.rect(10, 100, 300, 200);

	var paper = Raphael('draw', 0, 0, 1000, 1000);
	var rect = paper.rect(5, 5, 1000, 1000);

	//var c = paper.circle(400, 250, 20);

	//var d = 50;
	var grid = function() {
		var d = 50;
		for (var i = 1; i <= 9; i++) {
			var r1 = paper.rect(d*i, d, d, d);
			for (var j = 1; j <= 9; j++) {
				var r2 = paper.rect(d*i, d*j, d, d);
			}
		}
	};
	grid();
});

