import React, { useState } from 'react'
import { Typography } from "antd"

export default function article() {
    const [txt, setTxt] = useState("")
    return (
        <>
            <div>
                <Typography.Title level={1}>h1标题</Typography.Title>
                <Typography.Title level={2}>h2标题</Typography.Title>
                <Typography.Title level={3}>h3标题</Typography.Title>
                <Typography.Title level={4}>h4标题</Typography.Title>
            </div>
            <div>
                <Typography.Text type="secondary">Ant Design</Typography.Text>
                <br />
                <Typography.Text type="warning">Ant Design</Typography.Text>
            </div>
            <br />
            <div>
                <span>交互</span>
                <Typography.Text editable={{ onChange: setTxt }} >{txt}</Typography.Text>
            </div>
            <div>
                <span>拷贝</span>
                <Typography.Text copyable={{
                    text: "拷贝"}}></Typography.Text>
            </div>



        </>

    )
}
