import * as React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
export interface NavProps {}

export const Nav = (props: NavProps) => (
  <Menu mode="horizontal" theme="dark" style={{ lineHeight: "64px" }}>
    <Menu.Item key="home">
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="why">
      <Link to="/why">Why</Link>
    </Menu.Item>
    <Menu.Item key="getting-started">
      <Link to="/getting-started">Getting Started</Link>
    </Menu.Item>
    <Menu.Item key="docs">
      <Link to="/docs">Docs</Link>
    </Menu.Item>
    <Menu.Item key="support">
      <Link to="/support">Support</Link>
    </Menu.Item>
    <Menu.Item key="demos">
      <Link to="/demos">Demos</Link>
    </Menu.Item>
    <Menu.Item key="en">
      <Link to="/en/">English</Link>
    </Menu.Item>
    <Menu.Item key="source">
      <a
        href="https://github.com/Jeff-Tian/wechat-oauth-redirect"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
    </Menu.Item>
  </Menu>
);
