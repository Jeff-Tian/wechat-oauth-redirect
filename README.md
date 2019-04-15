# wechat-oauth-redirect (微信授权跳转)

> 一劳永逸的通用微信 OAuth 授权跳转。Universal wechat oauth authorizing redirect, once and for all.

[![Build Status](https://travis-ci.org/Jeff-Tian/wechat-oauth-redirect.svg?branch=master)](https://travis-ci.org/Jeff-Tian/wechat-oauth-redirect)

## 为什么要做这个？

每一次对接微信 OAuth 授权，都需要在指定的域名下发布一个跳转页面。那么不如做一个公开的跳转页，以后每次都把跳转域名配置成这个，省去重复开发、以及重复部署的麻烦。

## 怎么用？

1. 登录[微信公众平台](https://mp.weixin.qq.com)，找到"接口权限表"/网页服务/网页账号/"网页授权获取用户基本信息"一栏，点击"修改"，在"授权回调页面域名"输入框里填入：`wechat.js .org`，然后点击"确认"保存。
2. 获取微信授权链接时，将 `https://wechat.js.org/r?redirect=http://your.domain.com` 作为 `redirect` 参数传入，如：`https://open.weixin.qq .com/connect/oauth2/authorize`

## 常见问题：

### 这个域名稳定吗？

这是放在 `Github pages` 服务上的静态站点，域名服务商是 `js.org`。只要 `github` 与 `js.org` 服务正常，这个站点就是可用状态。
