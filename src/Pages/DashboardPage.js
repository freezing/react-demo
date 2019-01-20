import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import histogramsJson from '../assets/histograms.json';
import histogram1 from '../assets/histograms/1.json';
import histogram2 from '../assets/histograms/2.json';
import histogram3 from '../assets/histograms/3.json';
import HistogramSelector from '../Components/HistogramSelector';
import LatencyHistogram from '../Components/LatencyHistogram';

const HISTOGRAMS = {
  "1": histogram1,
  "2": histogram2,
  "3": histogram3
};

class Api {
  static getFullHistogram(histogramId) {
    if (histogramId === null) {
      return null;
    }
    return HISTOGRAMS[histogramId];
  }
}

export default class Dashboard extends Component {
  state = {selectedHistogramId: null}
  histograms = histogramsJson

  render() {
    const histogramId = this.state.selectedHistogramId;
    const histogram = Api.getFullHistogram(histogramId);
    const latencyHistogram = histogram === null ? null : <LatencyHistogram histogram={histogram} />;

    return (
      <div>
      	<Header as='h3'>Dashboard</Header>
        <HistogramSelector 
        	histograms={this.histograms}
        	selectedHistogramId={histogramId}
          itemOnClick={(histogramId) => this.itemOnClick(histogramId)}
        />
        {latencyHistogram}
      </div>
    );
  }

  itemOnClick(histogramId) {
    this.setState({selectedHistogramId: histogramId});
  }
}