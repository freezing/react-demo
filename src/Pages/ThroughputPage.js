import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Header } from 'semantic-ui-react'

import Api from '../Api/Api';
import ThroughputChart from '../Components/ThroughputChart';

class ThroughputPage extends Component {
	state = {benchmark: null}

	componentDidMount() {
		Api.getFullBenchmark(1)
			.then(benchmark => this.setState({benchmark: benchmark}))
			.catch(console.log);
	}

	render() {
		const benchmark = this.state.benchmark;
		if (benchmark === null) {
			return null;
		}
		console.log(JSON.stringify(benchmark));
		return (
			<div>
      			<Header as='h3'>Throughput</Header>
      			<ThroughputChart benchmark={benchmark} />
			</div>
		);
	}
}

const ThroughputPageWithRouter = withRouter(ThroughputPage);
export default ThroughputPageWithRouter;