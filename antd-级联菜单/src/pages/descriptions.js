import React, { useState, useRef } from 'react'
import { Descriptions, Empty, Tooltip, Modal, Button } from "antd"

//Descriptions  描述列表
//Empty空状态
//Tooltip鼠标移入文字提示


export default function descriptions() {
    const [show, setShow] = useState(false)
    const dref = useRef()
    return (
        <>
            <Descriptions ref={dref} title="个人信息" bordered>
                <Descriptions.Item label="用户名">
                    <Tooltip title="这是名字" placement="topLeft">
                        Zhou Maomao
                </Tooltip>
                </Descriptions.Item>
                <Descriptions.Item label="电话">
                    <Tooltip title="这是电话" placement="topLeft">
                        1810000000
                </Tooltip>
                </Descriptions.Item>
                <Descriptions.Item label="居住城市">
                    <Tooltip title="这是居住城市" placement="topLeft">
                        Hangzhou, Zhejiang
                </Tooltip>
                </Descriptions.Item>
                <Descriptions.Item label="备注">
                    <Tooltip title="这是备注" placement="topLeft" >
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    </Tooltip>
                </Descriptions.Item>
                <Descriptions.Item label="详细地址">
                    <Tooltip title="这是详细地址" placement="topLeft">
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Tooltip>
                </Descriptions.Item>
            </Descriptions >
            <Button onClick={
                () => {
                    setShow(true)
                }
            }>是否提交</Button>
            <Modal
                visible={show}
                onOk={() => {
                    setShow(false)
                    console.log("提交了数据", dref.current.props.children)
                }}
                onCancel={() => {
                    setShow(false)
                }}
            >
                <p>要提交的数据</p>

            </Modal>
        </>
    )
}
