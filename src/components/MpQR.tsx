import React, {useEffect, useState} from "react"
import {Skeleton, Result} from "antd"

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

        console.log(await res.json())
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
