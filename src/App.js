import React, { Component } from 'react'
import { Segment, Sidebar } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';
import Navigation from './Navigation';
import Content from './Content';

export default class App extends Component {
  state = { visible: true }

  render() {
    const { visible } = this.state;

    return (
      <div style={{minHeight: '100vh'}}>
        <Sidebar.Pushable as={Segment} style={{minHeight: '100vh'}}>
          <Navigation />

          <Sidebar.Pusher>
            <Segment basic>
              <Content />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
