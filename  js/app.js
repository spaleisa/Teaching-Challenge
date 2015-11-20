'use strict';

$(function() {
	// window.teach = {}
	// teach.paper = Raphael(300, 0, 900, 500);
	// teach.circle = teach.paper.circle(500, 100, 40);
	// teach.rect = teach.paper.rect(10, 100, 300, 200);

	var paper = Raphael('draw', 0, 0, 600, 512);
	var rect = paper.rect(5, 5, 505, 505);

	//var c = paper.circle(400, 250, 20);

	//var d = 50;
	var r;
	var grid = function() {
		var d = 50;
		for (var i = 1; i <= 9; i++) {
			for (var j = 1; j <= 9; j++) {
				r = paper.rect(d*i, d*j, d, d);
				r.attr({fill: 'white', cursor: 'pointer'});
			}
		}
	};
	grid();

	// function getClickPosition(e, r) {
	//     var parentPosition = getPosition(e.currentTarget);
	//     var xPosition = e.clientX - parentPosition.x;
	//     var yPosition = e.clientY - parentPosition.y;

	//     var c = paper.circle(xPosition, yPosition, 20);
	//     r.node.onclick = function() {
	//     	c.attr("fill", "red");
	//     };
	// }
 
	// function getPosition(element) {
 //    	var xPosition = 0;
 //    	var yPosition = 0;
      
 //    	while (element) {
 //        	xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
 //        	yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
 //        	element = element.offsetParent;
 //    	}
 //    	return { x: xPosition, y: yPosition };
	// }
});

