import React, { Component } from 'react';
import { Icon, List, Loader, Dimmer, Segment } from 'semantic-ui-react'

class BenchmarkItem extends Component {
	render() {
		const benchmark = this.props.benchmark;
		const color = this.props.isSelected ? "green" : "grey";
		return (
			<List.Item onClick={() => this.props.onClick(benchmark.id)}>
		        <Icon name="chart line" color={color} />
		        <List.Content>
		        	<List.Header>{benchmark.description}</List.Header>
		    	</List.Content>
		    </List.Item>
      );
	}
}

class BenchmarkSelector extends Component {
	render() {
		const benchmarks = this.props.benchmarks;
		if (benchmarks === null) {
			return (
				<Segment style={{height: '100px'}}>
					<Dimmer active inverted>
						<Loader content="Loading list of available benchmarks" />
					</Dimmer>
				</Segment>
			);
		}
		
		const items = benchmarks.map(benchmark => (
			<BenchmarkItem 
				key={benchmark.id} 
				benchmark={benchmark} 
				isSelected={this.props.selected.includes(benchmark.id)}
				onClick={this.props.benchmarkOnClick}
			/>
		));
		return (
			<Segment>
	        	<List selection verticalAlign='middle'>
	          		{items}
	        	</List>
	      	</Segment>
		);
	}
}

export default BenchmarkSelector;