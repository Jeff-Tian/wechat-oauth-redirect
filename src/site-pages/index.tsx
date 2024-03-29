import Markdown from "markdown-to-jsx"

require("../common/service-worker")
import * as React from "react"
import * as ReactDOM from "react-dom"

import {Col, Layout, Row} from "antd"

const {Header, Footer, Content} = Layout
import {BrowserRouter, Route, Switch} from "react-router-dom"
import "../less/layout.less"
import "../less/table.less"
import {Nav} from "../components/Nav"
import demosText from "!!raw-loader!./demos.md"
import docsText from "!!raw-loader!./docs.md"
import whyText from "!!raw-loader!./why.md"
import {MpQR} from "./mp-qr"
import resourceText from "!!raw-loader!./resources.md"

ReactDOM.render(
    <div>
        <BrowserRouter basename={process.env.ASSET_PATH}>
            <Layout>
                <Header>
                    <div className="logo">
                        <img src={require("../static/images/logo.jpg")}/>
                    </div>
                    <Nav/>
                </Header>
                <Content style={{padding: "24px 50px"}}>
                    <Switch>
                        <Route exact path="/" component={() => <div>Index</div>}/>
                        <Route
                            path="/docs"
                            component={() => <Markdown>{docsText}</Markdown>}
                        />
                        <Route
                            path="/demos"
                            component={() => <Markdown>{demosText}</Markdown>}
                        />
                        <Route
                            path="/why"
                            component={() => <Markdown>{whyText}</Markdown>}
                        />
                        <Route path="/mp-qr" component={MpQR}/>
                        <Route path="/resources" component={() => <Markdown>{resourceText}</Markdown>}/>
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
                            <p>
                                <a
                                    href="https://github.com/Jeff-Tian/egg-passport-wechat"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    egg 微信 passport 插件
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
                                    href="http://tictactoe.pa-ca.me"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    AI 三子棋
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://npmjs.com/package/grpc-man"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    gRPC man
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://ass-editor.pa-ca.me/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    在线视频字幕编辑器
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://short.pa-ca.me"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    短链生成器
                                </a>
                            </p>
                        </Col>
                    </Row>
                </Footer>
            </Layout>
        </BrowserRouter>
    </div>,
    document.getElementById("main")
)
