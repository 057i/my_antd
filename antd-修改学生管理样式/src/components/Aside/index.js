import React, { useState } from 'react'
import NavLink from "umi/navlink"
import { Menu, Icon } from "antd"
import withRouter from "umi/withRouter"




function index(props) {
    console.log(props.location.pathname)
    const { SubMenu } = Menu
    const [asideOpenKeys, setAsideOpenKeys] = useState([])

    const asideConfig = [
        {
            key: "/", type: "home", title: "后台管理首页"
        },
        {
            key: "信息选项", title: "信息选项", children: [{
                key: "/student/", type: "unordered-list", title: "学生列表页"
            }, {
                key: "/student/add", type: "user-add", title: "添加学生页"
            }]
        }]


    function getAsidePageConfig(config) {
        const target = []
        for (let i in config) {
            if (config[i].children) {
                target.push(
                    <SubMenu title={config[i].title} key={config[i].key} onTitleClick={() => {
                        //点击包含二级菜单栏时候触发页面跳转，就可以让函数通过页面地址匹配到对应的展开的openkeys
                        props.history.push("/student/")
                    }}>

                        {getAsidePageConfig(config[i].children)}
                    </SubMenu>
                )

            } else {
                target.push(<Menu.Item key={config[i].key}>
                    <NavLink to={config[i].key}><Icon type={config[i].type} />{config[i].title}</NavLink>
                </Menu.Item>)
            }
        }
        return target
    }


    //获取当前展开值菜单的值
    function getCurrentOpenKeys(config, pathname, selectname) {
        console.log(config, pathname, selectname)
        const target = []
        for (let i in config) {
            if (config[i].children) {

                return getCurrentOpenKeys(config[i].children, pathname, config[i].key)

            } else {
                if (config[i].key === pathname) {
                    target.push(selectname)
                }


            }
        }

        return target
    }




    console.log(getCurrentOpenKeys(asideConfig, props.location.pathname))


    return (

        //思路：使用withRouter包裹，将每个item值设置成对应的pathname,然后用location.pathname判断
        //设置选中


        <Menu theme="dark" mode="inline" selectedKeys={[props.location.pathname]} openKeys={getCurrentOpenKeys(asideConfig, props.location.pathname)}>
            {/* <Menu.Item key="/" >
                <NavLink to="/"><Icon type="home" />后台管理首页</NavLink>
            </Menu.Item>

            <SubMenu title="信息选项" key="123">
                <Menu.Item key="/student/">
                    <NavLink to="/student/"><Icon type="unordered-list" />学生列表页</NavLink>
                </Menu.Item>
                <Menu.Item key="/student/add">
                    <NavLink to="/student/add"><Icon type="user-add" />添加学生页</NavLink>
                </Menu.Item>
            </SubMenu> */}

            {
                getAsidePageConfig(asideConfig)
            }
        </Menu>
    )
}

export default withRouter(index)
