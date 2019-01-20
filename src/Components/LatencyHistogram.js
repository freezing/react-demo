import React, { Component } from 'react';
import { Loader, Dimmer, Segment } from 'semantic-ui-react'
import Bar from 'react-plotly.js';

const kHeight = 300;
const kWidth = 1000;

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
		const targetHistogramId = this.props.targetHistogramId;

		// Do not render this component if histogram is not set and it not going to be set.
		if (!histogram && !targetHistogramId) {
			return null;
		}

		// If target histogram is set, but it is not loaded yet, show loading.
		// Also, if histogram is set but it is not the same as the targetted histogram, show loading.
		if (!histogram || histogram.id !== targetHistogramId) {
			return(
				<Segment style={{height: kHeight}}>
					<Dimmer active inverted>
						<Loader content="Loading latency histogram" />
					</Dimmer>
				</Segment>
			);
		}

		// Finally, if targetted histogram and the one that's set are the same, render it.
		const data = [toBarData(histogram)];
		return <Bar data={data} layout={ {width: kWidth, height: kHeight, title: histogram.name} } />
	}
}