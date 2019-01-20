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
		const benchmarks = this.props.benchmarks;
		const data = benchmarks.map(toLineData);
		const title = this.extractTitle(benchmarks);
		const layout = {
			width: kWidth, 
			height: kHeight, 
			title: title,
			showLegend: true,
			yaxis: {
				rangemode: 'tozero',
		    	autorange: true
		    },
		};
		return <Line data={data} layout={layout} />
	}

	extractTitle(benchmarks) {
		if (benchmarks.length == 0) {
			return "";
		} else if (benchmarks.length == 1) {
			return benchmarks[0].description;
		} else {
			return "Throughput";
		}
	}
}

export default ThroughputChart;