'use strict';

$(function() {
	// window.teach = {}
	// teach.paper = Raphael(300, 0, 900, 500);
	// teach.circle = teach.paper.circle(500, 100, 40);
	// teach.rect = teach.paper.rect(10, 100, 300, 200);

	var paper = Raphael("container", 1000, 1000);
	// var r = paper.rect(900,900);
	// r.attr({fill: 'blue'});

	//var c = paper.circle(400, 250, 20);

	//var d = 50;
	var grid = function() {
		var d = 50;
		for (var i = 1; i <= 9; i++) {
			for (var j = 1; j <= 9; j++) {
				var r = paper.rect(d*i, d*j, d, d);
				r.attr({fill: 'white', cursor: 'pointer'});
			}
		}
	};
	grid();

	window.addEventListener("click", getClickPosition, false);

	function getClickPosition(e) {
		var xPosition = e.clientX;
		var yPosition = e.clientY;
		console.log(xPosition);
		console.log(yPosition);
		var c = paper.circle(xPosition - 5, yPosition - 5, 10);
	}

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

