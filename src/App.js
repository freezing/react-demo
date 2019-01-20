import React, { Component } from 'react'
import { Segment, Sidebar } from 'semantic-ui-react'
import { BrowserRouter as Router } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css';
import Navigation from './Navigation';
import AppPages from './AppPages';

export default class App extends Component {
  render() {
    return (
      <Router style={{minHeight: '100vh'}}>
        <Sidebar.Pushable as={Segment} style={{minHeight: '100vh'}}>
          <Navigation />

          <Sidebar.Pusher>
            <Segment basic>
              <AppPages />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>
    )
  }
}
