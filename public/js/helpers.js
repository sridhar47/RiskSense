var ajax = function(data) {
	var xhttp = new XMLHttpRequest();
	xhttp.open(data.method, data.url, data.async || true);
	xhttp.setRequestHeader("Content-Type", "application/json");

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			data.success(JSON.parse(xhttp.responseText))
		}
	}
	xhttp.send(JSON.stringify(data.body));
}

var vizApply = function(opts) {
	var visualization = d3plus.viz()
    	visualization.container(opts.container)  // container DIV to hold the visualization
    	visualization.data(opts.data)  // data to use with the visualization
    	visualization.type(opts.type)   // visualization type
    	visualization.id(opts.id)  // key for which our data is unique on
    	visualization.size(opts.size)    // sizing of blocks
    	visualization.tooltip(opts.tooltip) // list the keys to show in tooltip
    	visualization.color(opts.color)   // Changing the Default Color Range
    	visualization.draw()             // finally, draw the visualization!
}

window.ajax = ajax