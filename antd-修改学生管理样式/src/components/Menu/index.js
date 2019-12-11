import React from 'react'
import styles from "./index.css"
import Link from "umi/link"
import { Row, Col, Button, Typography } from 'antd'



export default function index(props) {
    console.log(props)
    const { Text } = Typography
    return (
        // <div className={styles.nav}>
        //     <h4 className={styles.left}><Link to="/student/">欢迎使用！！！</Link></h4>
        //     <div className={styles.right}>
        //         <span>欢迎你</span>
        //         <span>{props.loginName}</span>
        //         <button onClick={() => {
        //             props.onLoginOut()


        //         }}>注销</button>
        //     </div>
        // </div>

        <Row justify="space-between" type="flex">
            <Col span={5}>
                <h2 className={styles.left}>欢迎使用！！！</h2>
            </Col>
            <Col span={6}>
                <Text type="warning">欢迎你</Text>
                <Text type="warning" className={styles.userName}>{props.loginName}</Text>
                <Button icon="logout" onClick={() => {
                    props.onLoginOut()

                }}>注销</Button>
            </Col>
        </Row>




    )
}
