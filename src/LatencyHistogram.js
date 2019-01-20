import React, { Component } from 'react';
import Bar from 'react-plotly.js';

function nanosToLabel(nanos) {
	if (nanos > 1000000) {
		const millis = nanos / 1000000;
		return millis + " ms";
	} else if (nanos > 1000) {
		const micros = nanos / 1000;
		return micros + " us";
	}
	return nanos + " ns";
}

function toBarData(histogram) {
	return {
		name: histogram.name,
		text: histogram.buckets.map(bucket => bucket.percentile + " th pctl"),
		x: histogram.buckets.map(bucket => nanosToLabel(bucket.latencyNs)),
		y: histogram.buckets.map(bucket => bucket.totalCount),
		type: 'bar',
	};
}

export default class LatencyHistogram extends Component {
	render() {
		const histogram = this.props.histogram;
		const data = [toBarData(histogram)];
		return <Bar data={data} layout={ {width: 1000, height: 300, title: histogram.name} } />
	}
}