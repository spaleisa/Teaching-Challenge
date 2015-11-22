'use strict';

$(function() {
	// window.teach = {}
	// teach.paper = Raphael(300, 0, 900, 500);
	// teach.circle = teach.paper.circle(500, 100, 40);
	// teach.rect = teach.paper.rect(10, 100, 300, 200);

	var paper = Raphael("container", 1000, 1000);
	//var rect = paper.rect(0, 0, 1000, 1000);

	//var c = paper.circle(400, 250, 20);

	var rect = paper.rect(700, 30, 100, 100);
	rect.attr({
		fill: "purple"
	}).animate({
		y : 350
	}, 1000, "easeIn");

// 	var grid = function() {
// 		var position = 50;
// 		var height = 50;
// 		var width = 50;
// 		for (var i = 1; i <= 10; i++) {
// 			for (var j = 1; j <= 10; j++) {
// 				var r = paper.rect(position*i, position*j, width, height);

	// var r = paper.rect(900,900);
	// r.attr({fill: 'blue'});

	//var c = paper.circle(400, 250, 20);

	//var d = 50;
	var grid = function() {
		var position = 50;
 		var height = 50;
 		var width = 50;
		for (var i = 1; i <= 9; i++) {
			for (var j = 1; j <= 9; j++) {
				var r = paper.rect(position*i, position*j, width, height);
				r.attr({fill: 'white', cursor: 'pointer'});
			}
		}
	};
	grid();

	window.addEventListener("click", getClickPosition, false);

	var count = 0;
	function getClickPosition(e) {
		var xPosition = e.clientX;
		var yPosition = e.clientY;
		var c = paper.circle(xPosition - 5, yPosition - 5, 10);
		if (count % 2 === 0) {
			c.attr({
				fill: "90-#f00-#000",
				stroke: "none" 
			});
			c.animate({
				y : yPosition - 5
			}, 1000, "easeIn");
		} else {
			c.attr({
				fill: "270-#0000CC-#000",
				stroke: "none"
			});
			c.animate({
				y : yPosition - 5
			}, 1000, "easeIn");
		}
		count++;
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

