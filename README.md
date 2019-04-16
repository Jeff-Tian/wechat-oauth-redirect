# wechat-oauth-redirect (微信授权跳转)

> 一劳永逸的通用微信 OAuth 授权跳转。Universal wechat oauth authorizing redirect, once and for all.

> 人生苦短，少做跳转。一劳永逸，不再搬砖。

[![Build Status](https://travis-ci.org/Jeff-Tian/wechat-oauth-redirect.svg?branch=master)](https://travis-ci.org/Jeff-Tian/wechat-oauth-redirect)

## 为什么要做这个？

每一次对接微信 OAuth 授权，都需要在指定的域名下发布一个跳转页面。那么不如做一个公开的跳转页，以后每次都把跳转域名配置成这个，省去重复开发、以及重复部署的麻烦。

## 怎么用？

1. 登录[微信公众平台](https://mp.weixin.qq.com)，找到"接口权限表"/网页服务/网页账号/"网页授权获取用户基本信息"一栏，点击"修改"，在"授权回调页面域名"输入框里填入：`wechat.js .org`，然后点击"确认"保存。
2. 获取微信授权链接时，将 `https://wechat.js.org/r?redirect=http://your.domain.com` 作为 `redirect` 参数传入，如：`https://open.weixin.qq .com/connect/oauth2/authorize`

## 常见问题：

### 这个域名稳定吗？

这是放在 `Github pages` 服务上的静态站点，域名服务商是 `js.org`。只要 `github` 与 `js.org` 服务正常，这个站点就是可用状态。

## 开发：

### 解构此库：

- **打包工具 webpack**: webpack 是一个代码打包工具，它甚至可以把项目所有的依赖放进一个 `.js` 文件里
- **开发语言 typescript**: 微软开发的强类型语言，它是 `javascript` 的一个超集。本项目的 webpack 里使用了 `ts-loader` 把它转译成 `javascript`
- **部署在 `Github pages`**：这是一个静态站点托管提供者。
- **域名解析在 `js.org` 上**：`js.org` 提供免费二级域名解析。
- **前端框架 React**: React 是一个组件化的前端框架，大大提高了可重用性，让页面的开发就像搭积木一样。
- **UI 框架 ant design**: Ant Design 是一个优秀的样式库。

### 本地开发：

```shell
npm run server
```
