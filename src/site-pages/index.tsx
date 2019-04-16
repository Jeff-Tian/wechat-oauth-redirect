import { Hello } from "../components/Hello";

require("../common/service-worker");
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <div>
    <Header>Header</Header>
    <Content>
      <BrowserRouter basename={process.env.ASSET_PATH}>
        <Switch>
          <Route path="/" component={Hello} />
        </Switch>
      </BrowserRouter>
    </Content>
    <Footer>Footer</Footer>
  </div>,
  document.getElementById("main")
);
