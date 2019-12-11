import React, { useRef } from 'react'
import { Button, Input, Row, Col, Radio } from "antd"

// 搜索区样式

export default function index(props) {
    const searchValRef = useRef()
    const sexRef = useRef()
    return (
        <Row type="flex" justify="space-around" style={{ padding: "15px" }}>
            <Col>
                <Input addonBefore="搜索词" onChange={(e) => {
                    props.onSearchValChange(e.target.value)
                }} />
            </Col>
            <Col>
                <Radio.Group defaultValue="-1" onChange={(e) => { props.onSexChange(e.target.value) }}>
                    <Radio.Button value="-1">不限</Radio.Button>
                    <Radio.Button value="1">男</Radio.Button>
                    <Radio.Button value="0">女</Radio.Button>
                </Radio.Group>
            </Col>
            <Col>
                <Button type="primary" onClick={() => {
                    props.onSearch()
                }}> 搜索</Button>
            </Col>
        </Row>
    )
}
