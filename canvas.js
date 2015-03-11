tool.fixedDistance = 10;

var layer = project.activeLayer;

function onMouseMove(event) {
	// The radius of the circle is the distance we moved
	// divided by 2:
	function rastgele (x,y) {
	/*x ten y'ye kadar rastgele sayı ver*/
	return ~~(Math.random() * y) + x;
}
	var radius = event.delta.length / 2;
    
	// Create a circle shaped path at the point in the middle between
	// the current position of the mouse and the last position of
	// the mouse:
	var path = new Path.Circle({
		center: event.middlePoint,
		radius: rastgele(5,15),
		shadowColor: new Color(0, 0, 0),
    // Set the shadow blur radius to 12:
    shadowBlur: 5,
    // Offset the shadow by { x: 5, y: 5 }
    shadowOffset: new Point(1, 1)
	});
  	
   
	
   
	// The hue is defined by the amount of times the onMouseMove
	// event has been fired, multiplied by 10:
	path.fillColor = {
		hue: event.count * 3,
		saturation: 1,
		brightness: 1
	};
	
	// If we created at least 8 paths, remove the first
	// path in the layer.
	console.log(layer.children.length);
	if (layer.children.length > 18)
		layer.firstChild.remove();
}
