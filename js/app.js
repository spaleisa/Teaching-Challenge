'use strict';

$(function() {

	var paper = Raphael("container", 1500, 1000);

	// var rect = paper.rect(700, 30, 100, 100);
	// rect.attr({
	// 	fill: "purple"
	// }).animate({
	// 	y : 350
	// }, 1000, "easeIn");

	var rect = paper.rect(700, 30, 100, 100);
    rect.attr({
        fill: 'purple',
        "stroke-width": '10',
        cursor : "pointer"
    }).hover(function(){
        this.attr({fill : "gold"})
    }, function() {
        this.attr({fill: 'purple'});
    });

    var c = paper.circle(950, 90, 50, 50, 50);
    c.attr({
        fill: '180-#009933-#000'
    }).animate({
        cy : 500, 
        transform: "s2"
    }, 1000, "bounce");

    var r = paper.rect(700, 250, 100, 100);
    r.attr({
        fill : "orange"
    }).animate({
        transform: "r180",
        fill: "blue"
    }, 1000);



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
		var c = paper.circle(xPosition - 5, 0, 10);
		if (count % 2 === 0) {
			c.attr({
				fill: "90-#f00-#000",
				stroke: "none" 
			});
			c.animate({
				cy : yPosition - 5
			}, 1000, "easeIn");
		} else {
			c.attr({
				fill: "270-#0000CC-#000",
				stroke: "none"
			});
			c.animate({
				cy : yPosition - 5
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

