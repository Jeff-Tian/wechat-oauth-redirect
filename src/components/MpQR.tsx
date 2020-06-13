import React, {useEffect, useState} from "react"
import {Skeleton, Result} from "antd"
import querystring from 'querystring'

export const MpQR = () => {
    const [qr, setQr] = useState()
    const [loading, setLoading] = useState(true)
    const [ticket, setTicket] = useState()

    async function fetchQr() {
        const res = await fetch('https://sso.jiwai.win/wechat/mp-qr-url', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const {imageUrl, expire_seconds, sceneId, ticket, url} = await res.json()

        setQr(imageUrl)
        setTicket(ticket)
        setLoading(false)
    }

    async function fetchQrScanStatus() {
        const res = await fetch(`https://sso.jiwai.win/wechat/mp-qr-scan-status?ticket=${ticket}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const {status, openId} = await res.json()

        const {state} = querystring.parse(window.location.search.substr(1))

        if (openId) {
            window.location.href = `https://keycloak.jiwai.win/auth/realms/UniHeart/broker/weixin/endpoint?openid=${openId}&state=${state}`
        }
    }

    useEffect(() => {
        fetchQr()
    }, ['dontRunAgain'])

    useEffect(() => {
        if (!!ticket) {
            fetchQrScanStatus()
        }
    }, [ticket])

    return <div>
        <Result title="请使用手机微信扫描二维码" subTitle="等待扫描中……">
            <img alt="qr" src={qr}/>
        </Result>
    </div>
}
