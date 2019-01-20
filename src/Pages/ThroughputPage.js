import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Header } from 'semantic-ui-react'

import Api from '../Api/Api';
import HistogramSelector from '../Components/HistogramSelector';
import LatencyHistogram from '../Components/LatencyHistogram';

class ThroughputPage extends Component {
  
}

const ThroughputPageWithRouter = withRouter(ThroughputPage);
export default ThroughputPageWithRouter;