import React from 'react'
import Login from "@/pages/login"
import Aside from "@/components/Aside/index"
import Menu from "@/Container/MenuContainer"
import { Layout } from "antd"
import styles from "./index.css"


export default function index(props) {

    //判断，如果是登录页，则不显示通用模板页；
    // 如果是其他页面，就和通用模板页一起展示。方法有很多，
    //可以利用上下文属性中的location.pathname

    if (props.location.pathname === "/login") {
        return <Login />


    } else {
        const { Header, Sider, Content } = Layout

        return (
            // <>
            //     <Menu />
            //     <div className={styles.main}>
            //         <Aside className={styles.aside} />
            //         <div className={styles.content}>
            //             {props.children}
            //         </div>
            //     </div>
            // </>

            <Layout>
                <Header>
                    <Menu />
                </Header>
                <Layout className={styles.main}>
                    <Sider>
                        <Aside />
                    </Sider>
                    <Content>
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
