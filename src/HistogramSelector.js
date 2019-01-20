import React, { Component } from 'react'
import { Icon, List } from 'semantic-ui-react'

class SelectorItem extends Component {

  render() {
    const histogram = this.props.histogram;
    const color = this.props.selected ? "green" : "grey";

    return (
      <List.Item onClick={() => this.props.onClick(histogram.id)}>
        <Icon name="chart bar" color={color} />
        <List.Content>
          <List.Header>{histogram.name}</List.Header>
          <p>{histogram.commit}</p>
        </List.Content>
      </List.Item>
    );
  }
}

export default class HistogramSelector extends Component {
  render() {
    const selectedHistogramId = this.props.selectedHistogramId;
    const items = Object.keys(this.props.histograms).map(histogramId => {
      const histogram = this.props.histograms[histogramId];
      return (
        <SelectorItem 
          key={histogram.id}
          histogram={histogram} 
          selected={selectedHistogramId === histogram.id}
          onClick={(id) => this.props.itemOnClick(id)}
        />
      );
    });
    return (
      <div>
      <List selection verticalAlign='middle'>
        {items}
      </List>
      </div>
    );
  }
}
