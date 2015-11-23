'use strict';

$(function() {

var paper = Raphael("container", 1500, 1000);
	var prect = paper.rect(0, 0, 1500, 1000);

	var rect = paper.rect(700, 30, 100, 100);
	rect.attr({
		fill: "180-#009933-#000"
	}).animate({
		cy : 300,
		transform: "r180"
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
});



// This is what we originally wanted to do but realized it was way too long. We wanted to still keep it in so that you guys could view it and anyone who clones the code can still see it.



	// var rect = paper.rect(700, 30, 100, 100);
 //    rect.attr({
 //        fill: 'purple',
 //        "stroke-width": '10',
 //        cursor : "pointer"
 //    }).hover(function(){
 //        this.attr({fill : "gold"})
 //    }, function() {
 //        this.attr({fill: 'purple'});
 //    });

 //    var c = paper.circle(950, 90, 50, 50, 50);
 //    c.attr({
 //        fill: '180-#009933-#000'
 //    }).animate({
 //        cy : 500, 
 //        transform: "s2"
 //    }, 1000, "bounce");

 //    var r = paper.rect(700, 250, 100, 100);
 //    r.attr({
 //        fill : "orange"
 //    }).animate({
 //        transform: "r180",
 //        fill: "blue"
 //    }, 1000);

