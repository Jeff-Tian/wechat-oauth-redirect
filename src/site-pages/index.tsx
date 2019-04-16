import { Hello } from "../components/Hello";

require("../common/service-worker");
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Docs } from "../components/Docs";
import "../less/layout.less";
import { Nav } from "../components/Nav";
ReactDOM.render(
  <div>
    <BrowserRouter basename={process.env.ASSET_PATH}>
      <Layout>
        <Header>
          <div className="logo">
            <img src={require("../static/images/logo.jpg")} />
          </div>
          <Nav />
        </Header>
        <Content>
          <Switch>
            <Route exact path="/" component={() => <div>Index</div>} />
            <Route path="/docs" component={() => <div>Docs</div>} />
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </BrowserRouter>
  </div>,
  document.getElementById("main")
);
