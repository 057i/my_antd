import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TurnPage from "./TurnPage"
import { Pagination, Row, Col } from "antd"



///**
//  * 分页组件
//  * 属性：
//  * 1. current：初始页码
//  * 2. total：总数据量
//  * 3. limit：页容量，每页显示的数据量
//  * 4. panelNumber：数字页码最多显示多少个
//  * 5. onPageChange：当页码改变的事件
//  */

export default function PagerIndex(props) {

    return (
        // <>
        //     <TurnPage {...props} handle={props.onPageChange} />

        // </>
        <Row type="flex" justify="center" style={{padding:"15px"}}>
            <Col>
                <Pagination {...props} showQuickJumper />
            </Col>
        </Row>
    )

}




