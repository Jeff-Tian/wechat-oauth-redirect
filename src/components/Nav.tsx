import * as React from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";

export interface NavProps {
}

export const Nav = (props: NavProps) => (
    <Menu
        mode="horizontal"
        theme="dark"
        style={{lineHeight: "64px"}}
        defaultSelectedKeys={[location.pathname]}
    >
        <Menu.Item key="/">
            <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="/why">
            <Link to="/why">为什么</Link>
        </Menu.Item>
        <Menu.Item key="/getting-started">
            <Link to="/getting-started">快速开始</Link>
        </Menu.Item>
        <Menu.Item key="/docs">
            <Link to="/docs">文档</Link>
        </Menu.Item>
        <Menu.Item key="/support">
            <Link to="/support">支持</Link>
        </Menu.Item>
        <Menu.Item key="/demos">
            <Link to="/demos">演示</Link>
        </Menu.Item>
        <Menu.Item key="/resources">
            <Link to="/resources">资源</Link>
        </Menu.Item>
        <Menu.Item key="/en">
            <Link to="/en/">English</Link>
        </Menu.Item>
        <Menu.Item key="/source">
            <a
                href="https://github.com/Jeff-Tian/wechat-oauth-redirect"
                target="_blank"
                rel="noopener noreferrer"
            >
                源码
            </a>
        </Menu.Item>
    </Menu>
);
