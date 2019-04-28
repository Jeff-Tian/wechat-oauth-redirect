import Markdown from "markdown-to-jsx";
require("../common/service-worker");
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Col, Layout, Row } from "antd";
const { Header, Footer, Content } = Layout;
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../less/layout.less";
import { Nav } from "../components/Nav";
import demosText from "!!raw-loader!./demos.md";
import whyText from "!!raw-loader!./why.md";

console.log("rendering...");
ReactDOM.render(
  <div>
    <p>Index.tsx</p>
    <BrowserRouter basename={process.env.ASSET_PATH}>
      <Layout>
        <Header>
          <div className="logo">
            <img src={require("../static/images/logo.jpg")} />
          </div>
          <Nav />
        </Header>
        <Content style={{ padding: "24px 50px" }}>
          <Switch>
            <Route exact path="/" component={() => <div>Index</div>} />
            <Route path="/docs" component={() => <div>Docs</div>} />
            <Route
              path="/demos"
              component={() => <Markdown>{demosText}</Markdown>}
            />
            <Route
              path="/why"
              component={() => <Markdown>{whyText}</Markdown>}
            />
          </Switch>
        </Content>
        <Footer>
          <Row gutter={16}>
            <Col span={6}>
              <h3>相关资源</h3>
              <p>
                <a
                  href="https://github.com/Jeff-Tian/wechat-oauth-ts"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  微信 OAuth 授权 SDK
                </a>
              </p>
            </Col>
            <Col span={6}>
              <h3>社区</h3>
              <p>敬请期待</p>
            </Col>
            <Col span={6}>
              <h3>帮助</h3>
              <p>
                <a
                  href="https://github.com/Jeff-Tian/wechat-oauth-redirect/issues"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Github
                </a>
              </p>
            </Col>
            <Col span={6}>
              <h3>更多产品</h3>
              <p>
                <a
                  href="http://tictactoe.js.org"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  AI 三子棋
                </a>
              </p>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </BrowserRouter>
  </div>,
  document.getElementById("main")
);
console.log("rendered");
