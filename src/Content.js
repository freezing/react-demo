import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react'

export default class Content extends Component {
  render() {
    return (
      <div>
      	<Header as='h3'>Application Content</Header>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </div>
    );
  }
}