import React, { Component } from 'react'
import { Icon, Menu, Sidebar } from 'semantic-ui-react'

export default class Navigation extends Component {
  state = { visible: true }

  render() {
    const { visible } = this.state;

    return (
          <Sidebar
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
              <Icon name='dashboard' />
              Dashboard
            </Menu.Item>
          </Sidebar>
    );
  }
}
