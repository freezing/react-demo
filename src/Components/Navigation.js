import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu, Sidebar } from 'semantic-ui-react'

const LinkItem = (props, url, iconName, content) => (
  <Link className={props.className} to={url}>
    <Icon name={iconName} />
    {content}
  </Link>
);

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
            <Menu.Item as={(props) => LinkItem(props, "/dashboard", "dashboard", "Dashboard")} />
            <Menu.Item as={(props) => LinkItem(props, "/throughput", "chart line", "Throughput")} />
          </Sidebar>
    );
  }
}
