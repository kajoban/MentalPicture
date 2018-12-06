import React, { Component } from 'react';
import * as d3 from 'd3';

class LineGraph extends Component {
    componentDidMount() {
        this.drawChart();
      }

    drawChart () {
        
        // define dimensions of graph
		var m = [80, 80, 80, 80]; // margins
		var w = 1000 - m[1] - m[3]; // width
		var h = 400 - m[0] - m[2]; // height
		
		// create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
		var data = [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7];

		// X scale will fit all values from data[] within pixels 0-w
		var x = d3.scaleLinear().domain([0, data.length]).range([0, w]);
		// Y scale will fit values from 0-10 within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!)
		var y = d3.scaleLinear().domain([0, 10]).range([h, 0]);
			// automatically determining max range can work something like this
			// var y = d3.scale.linear().domain([0, d3.max(data)]).range([h, 0]);

		// create a line function that can convert data[] into x and y points
		var line = d3.line()
			// assign the X function to plot our line as we wish
			.x(function(d,i) { 
				// verbose logging to show what's actually being done
				console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
				// return the X coordinate where we want to plot this datapoint
				return x(i); 
			})
			.y(function(d) { 
				// verbose logging to show what's actually being done
				console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
				// return the Y coordinate where we want to plot this datapoint
				return y(d); 
			})

			// Add an SVG element with the desired dimensions and margin.
			var svg = d3.select("body").append("svg")
    .attr("width", w + m[3] + m[1])
    .attr("height", h + m[0] + m[2])
  .append("g")
    .attr("transform",
          "translate(" + m[3] + "," + m[0]+ ")");

                svg.append("g")
                  .attr("transform", "translate(0," + h + ")")
                  .call(d3.axisBottom(x));


			// create left yAxis
        svg.append("g")
            .call(d3.axisLeft(y));
			
  			// Add the line by appending an svg:path element with the data line we created above
			// do this AFTER the axes above so that the line is above the tick-lines
  			svg.append("svg:path").attr("d", line(data));
    }
    render(){
        return(
            <div></div>
        )
    }
}

export default LineGraph;