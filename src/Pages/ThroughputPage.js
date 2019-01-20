import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Header } from 'semantic-ui-react'

import Api from '../Api/Api';
import ThroughputChart from '../Components/Benchmarks/ThroughputChart';
import BenchmarkSelector from '../Components/Benchmarks/BenchmarkSelector';

function getParamAsIntListOrEmpty(params, name) {
  if (!params.hasOwnProperty(name)) {
    return [];
  }
  const rawValues = params[name].split(",");
  return rawValues.map(x => parseInt(x, 10)).filter(v => !isNaN(v));
}

class ThroughputPage extends Component {
	constructor(props) {
		super(props)
		const {match: {params}} = props;
		const selectedBenchmarkIds = getParamAsIntListOrEmpty(params, 'selectedBenchmarkIds');
		this.state = {benchmarks: {}, selectedBenchmarkIds: selectedBenchmarkIds, availableBenchmarks: null}
	}

	componentDidMount() {
		Api.getBenchmarks()
			.then(benchmarks => this.setState({availableBenchmarks: benchmarks}))
			.catch(console.log);

		this.state.selectedBenchmarkIds.forEach(selectedBenchmarkId => {
			this.fetchBenchmark(selectedBenchmarkId);
		});
	}

	render() {
		let benchmarks = [];
		Object.keys(this.state.benchmarks).forEach(benchmarkId => {
			if (this.state.selectedBenchmarkIds.includes(parseInt(benchmarkId))) {
				benchmarks.push(this.state.benchmarks[benchmarkId]);
			}
		});

		return (
			<div>
      			<Header as='h3'>Throughput</Header>
      			<ThroughputChart benchmarks={benchmarks} />
      			<BenchmarkSelector 
      				benchmarks={this.state.availableBenchmarks} 
      				selected={this.state.selectedBenchmarkIds} 
      				benchmarkOnClick={benchmarkId => this.benchmarkOnClick(this.props.history, benchmarkId)}
      			/>
			</div>
		);
	}

	addBenchmarkIfSelected(benchmark) {
		if (this.state.selectedBenchmarkIds.includes(benchmark.id)) {
			let newBenchmarks = this.state.benchmarks;
			newBenchmarks[benchmark.id] = benchmark;
			this.setState({benchmarks: newBenchmarks});
		}
	}

	benchmarkOnClick(history, benchmarkId) {
		let newSelectedBenchmarkIds;
		if (this.state.selectedBenchmarkIds.includes(benchmarkId)) {
			let newBenchmarks = this.state.benchmarks;
			delete newBenchmarks[benchmarkId];
			newSelectedBenchmarkIds = this.state.selectedBenchmarkIds.filter(value => value !== benchmarkId);
			this.setState({
				selectedBenchmarkIds: newSelectedBenchmarkIds,
				benchmarks: newBenchmarks,
			});
		} else {
			newSelectedBenchmarkIds = this.state.selectedBenchmarkIds.concat(benchmarkId);
			this.setState({selectedBenchmarkIds: newSelectedBenchmarkIds});
			this.fetchBenchmark(benchmarkId);
		}
		history.push('/throughput/' + newSelectedBenchmarkIds);
	}

	fetchBenchmark(benchmarkId) {
		Api.getFullBenchmark(benchmarkId)
			.then(benchmark => this.addBenchmarkIfSelected(benchmark))
			.catch(console.log);
	}
}

const ThroughputPageWithRouter = withRouter(ThroughputPage);
export default ThroughputPageWithRouter;