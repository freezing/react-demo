import React, { Component } from 'react';
import { withRouter } from "react-router";
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
    if (HISTOGRAMS.hasOwnProperty(histogramId)) {
      return HISTOGRAMS[histogramId];
    }
    return null;
  }
}

function getParamAsIntOrNull(params, name) {
  if (!params.hasOwnProperty('histogramId')) {
    return null;
  }
  const value = parseInt(params.histogramId, 10);
  if (isNaN(value)) {
    return null;
  }
  return value;
}

class DashboardPage extends Component {
  histograms = histogramsJson

  constructor(props) {
    super(props)
    const {match: {params}} = props;
    const histogramId = getParamAsIntOrNull(params, 'histogramId');
    this.state = {selectedHistogramId: histogramId};
  }

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
          itemOnClick={(histogramId) => this.itemOnClick(this.props.history, histogramId)}
        />
        {latencyHistogram}
      </div>
    );
  }

  itemOnClick(history, histogramId) {
    history.push('/dashboard/' + histogramId);
    this.setState({selectedHistogramId: histogramId});
  }
}

const DashboardPageWithRouter = withRouter(DashboardPage);
export default DashboardPageWithRouter;