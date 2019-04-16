require("../common/service-worker");
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

ReactDOM.render(
  <div>
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </div>,
  document.getElementById("main")
);
