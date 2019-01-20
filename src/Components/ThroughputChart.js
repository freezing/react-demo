import React, { Component } from 'react';
import Line from 'react-plotly.js';

const kWidth = 1000;
const kHeight = 300;

function toLineData(benchmark) {
	return {
		name: benchmark.description,
		text: benchmark.measurements.map(measurement => measurement.commit),
		x: benchmark.measurements.map(measurement => measurement.timestamp),
		y: benchmark.measurements.map(measurement => measurement.throughput),
		type: 'scatter',
	};
}

class ThroughputChart extends Component {
	render() {
		const benchmark = this.props.benchmark;
		const data = [toLineData(benchmark)];
		const layout = {
			width: kWidth, 
			height: kHeight, 
			title: "Throughput",
			showLegend: true,
			yaxis: {
				rangemode: 'tozero',
		    	autorange: true
		    },
		};
		return <Line data={data} layout={layout} />
	}
}

export default ThroughputChart;