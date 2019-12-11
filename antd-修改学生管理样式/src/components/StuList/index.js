import React from 'react'
import { Table, Tag } from "antd"
import withRouter from "umi/withRouter"




function Index(props) {

    const columns = [
        { title: "学号", dataIndex: "sNo", key: "sNo" },
        { title: "姓名", dataIndex: "name", key: "name" },
        { title: "性别", dataIndex: "sex", key: "sex" },
        { title: "年龄", dataIndex: "age", key: "age" },
        { title: "住址", dataIndex: "addr", key: "addr" },
        {
            title: "操作", dataIndex: "operation", key: "operation",

            //columns属性返回一个标签,接受一个参数，是dataSource对应名字返回回来的数据
            render: (params) => {
                return <Tag onClick={() => {

                    props.history.push(`/student/${params}`)
                }}>修改</Tag>
            }
        },
    ];//显示在页面上的字段

    const dataSource = [];//数据源


    props.datas && props.datas.map((elm, index) => {
        dataSource.push({
            // key是每个属性的唯一表示
            key: elm.id,
            sNo: elm.sNo,
            name: elm.name,
            sex: elm.sex == 0 ? "男" : "女",
            age: elm.birth,
            addr: elm.address,
            operation: elm.sNo
        })
    })



    return (

        <Table dataSource={dataSource} columns={columns} pagination={false}>

        </Table>
    )
}

export default withRouter(Index)
