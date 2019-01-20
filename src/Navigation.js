import React, { Component } from 'react'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

export default class Navigation extends Component {
  state = { visible: true }

  render() {
    const { visible } = this.state;

    return (
          <Sidebar
            styleName="min-height: 100vh;"
            as={Menu}
            animation='push'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
    );
  }
}
