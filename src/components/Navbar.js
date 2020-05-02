import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

const Navbar = (props) => {
  return (
    <div>
      <Menu mode="horizontal" style={{ background: '#a8071a', lineHeight: '64px' }}>
        <Menu.Item key="1" disabled icon={<AppstoreOutlined />} style={{ fontSize: '20px' }}>
          IMAX
        </Menu.Item>
        <Menu.Item key="2" className="menu-item-right">
          <NavLink to="/events">Events</NavLink>
        </Menu.Item>
        <Menu.Item key="3" className="menu-item-right">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default withRouter(Navbar);
