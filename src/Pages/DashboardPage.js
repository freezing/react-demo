import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Header } from 'semantic-ui-react'

import Api from '../Api/Api';
// import histogramsJson from '../assets/histograms.json';
// import histogram1 from '../assets/histograms/1.json';
// import histogram2 from '../assets/histograms/2.json';
// import histogram3 from '../assets/histograms/3.json';
import HistogramSelector from '../Components/HistogramSelector';
import LatencyHistogram from '../Components/LatencyHistogram';

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
  constructor(props) {
    super(props)
    const {match: {params}} = props;
    const targetHistogramId = getParamAsIntOrNull(params, 'histogramId');
    this.state = {displayedHistogram: null, histograms: null, targetHistogramId: targetHistogramId};
  }

  render() {
    const targetHistogramId = this.state.targetHistogramId;
    const displayedHistogram = this.state.displayedHistogram;
    const histograms = this.state.histograms;

    return (
      <div>
      	<Header as='h3'>Dashboard</Header>
        <HistogramSelector 
          histograms={histograms}
          targetHistogramId={targetHistogramId}
          itemOnClick={(histogramId) => this.itemOnClick(this.props.history, histogramId)}
        />
        <LatencyHistogram histogram={displayedHistogram} targetHistogramId={targetHistogramId} />
      </div>
    );
  }

  itemOnClick(history, histogramId) {
    history.push('/dashboard/' + histogramId);
    this.fetchAndSetHistogramIfNotNull(histogramId);
  }

  componentDidMount() {
    this.fetchAndSetHistogramIfNotNull(this.state.targetHistogramId);
    Api.getHistograms()
      .then(json => this.setState({histograms: json}))
      .catch(console.log);
  }

  fetchAndSetHistogramIfNotNull(histogramId) {
    this.setState({targetHistogramId: histogramId});

    if (histogramId === null) {
      this.setState({displayedHistogram: null});
      return;
    }
    
    Api.getFullHistogram(histogramId)
      .then(json => this.setState({displayedHistogram: json}))
      .catch(console.log);
  }
}

const DashboardPageWithRouter = withRouter(DashboardPage);
export default DashboardPageWithRouter;