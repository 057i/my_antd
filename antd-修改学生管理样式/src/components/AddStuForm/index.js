import React, { Component } from 'react'
import { Form, Input, Radio, Switch, Button, Select, Spin, Tag } from "antd"

import UploadAvator from "@/components/UploadAvator/"
import { addStu, findStuById, modifyStu } from "@/Utils/fetchStu"
import withRouter from "umi/withRouter"




const { Option } = Select

class index extends Component {

    state = {
        isLoading: false,
        avatorVal: ""

    }

    //年份下拉框创建
    createBirthInput(start, end) {
        const list = []
        for (let i = start; i <= end; i++) {
            list.push(<Option key={i}>{i}</Option>)
        }
        return list
    }



    handleSubmit = (e) => {
        e.preventDefault()
        //validateFields校验表单每一项数据


        this.props.form.validateFields(async (err, values) => {
            // console.log("信息没错", values)

            //没有错的情况,提交信息
            if (!err) {
                delete values.isMonitor

                this.setState({
                    isLoading: true
                })

                //判断当前是修改页提交还是添加页提交
                let result;
                if (this.props.mode === "modify") {


                    result = await modifyStu(values)
                    console.log(result)

                } else {
                    result = await addStu(values)
                }


                this.setState({
                    isLoading: false
                })

                //请求成功 跳转页面
                if (result.status == "success") {
                    this.props.history.push("/student/")
                } else {
                    alert(result.msg)
                }


            } else {

                console.log(err, "错误")
            }

        })
    }



    getFieldConfig(config) {
        let result = {}
        for (let prop in config) {
            result[prop] = Form.createFormField({
                value: config[prop]
            })
        }
        console.log(result)
        return result
    }



    async componentDidMount() {
        {/* 如果是修改页，根据url判断学号，然后去全部学生中筛选，找到数据并填充 */ }
        if (this.props.mode === "modify" && this.props.location.pathname.match(/^\/student\/\d+$/)) {
            //匹配出数字
            let quStr = this.props.location.pathname.match(/\d+$/)[0]
            let result = await findStuById(quStr).then(res => res)


            //这一步要注意，渲染到Form中的数据，必须要用Form.createFormField包装，多做一步，不然渲染不上
            let renderInfo = this.getFieldConfig(...result)

            this.props.form.setFields(this.getFieldConfig(...result))

        }
    }








    render() {
        // 经过 getFieldDecorator 包装的控件，用于和Form表单进行双向数据绑定
        // 表单控件会自动添加 value（或 valuePropName 指定的其他属性） onChange（或 trigger 指定的其他属性），
        // 数据同步将被 Form 接管   

        const { getFieldDecorator, getFieldsValue } = this.props.form//因为是Form包装的高阶组件,所以去Form中拿方法

        return (


            <Spin tip="loading..." size="large" spinning={this.state.isLoading}>

                {/* 顶部标签判断是修改页还是添加页 */}
                <Tag color="#f50" style={{ margin: "20px" }}>{this.props.mode === "modify" ? "修改页" : "添加页"}</Tag>





                <Form
                    labelCol={{ span: 3, offset: 3 }}
                    wrapperCol={{ span: 5 }}
                    onSubmit={this.handleSubmit}>


                    {/* 不写label值不会按照Form样式对其 */}
                    <Form.Item label="头像">
                        {
                            getFieldDecorator("avator")(<UploadAvator
                                avatorValue={this.state.avatorVal}
                                Change={(newVal) => {
                                    this.setState({
                                        ...this.state,
                                        avatorVal: newVal
                                    })
                                }} />)
                        }
                    </Form.Item>





                    <Form.Item label="学号" >
                        {getFieldDecorator("sNo", {
                            rules: [
                                {
                                    required: true,
                                    message: "请输入学号"
                                },
                                {
                                    pattern: /^\d{4,16}$/,
                                    message: "学号必须是4-16位纯数字"
                                }
                            ]
                        })(<Input disabled={this.props.mode === "modify" ? true : false} />)}
                    </Form.Item>


                    <Form.Item label="姓名">
                        {getFieldDecorator("name", {
                            rules: [
                                {
                                    required: true,
                                    message: "请输入姓名"
                                }
                            ]
                        })(<Input />)}
                    </Form.Item>

                    <Form.Item label="性别">
                        {getFieldDecorator("sex", {
                            rules: [{
                                required: true,
                                message: "请选择性别"
                            }]

                        })(<Radio.Group>
                            <Radio.Button value={0}>男</Radio.Button>
                            <Radio.Button value={1}>女</Radio.Button>
                        </Radio.Group>)}
                    </Form.Item>

                    <Form.Item label="地址">
                        {getFieldDecorator("address", {
                            rules: [{
                                required: true,
                                message: "请输入地址"
                            }]

                        })(<Input />)}
                    </Form.Item>


                    <Form.Item label="邮箱">
                        {getFieldDecorator("email", {
                            rules: [
                                {
                                    required: true,
                                    message: "请输入邮箱"
                                },
                                {

                                    pattern: /\w+\@\w+\.\w+/,
                                    message: "邮箱不正确"

                                }]

                        })(<Input />)}
                    </Form.Item>


                    <Form.Item label="出生年份">
                        {getFieldDecorator("birth", {
                            initialValue: '1980',
                            rules: [{
                                required: true,
                                message: "请选择出生年份!"
                            }]
                        })(<Select>
                            {this.createBirthInput(1980, 2019)}
                        </Select>)}
                    </Form.Item>

                    <Form.Item label="是否是班长">
                        {getFieldDecorator("isMonitor", {
                            valuePropName: "checked"
                        })(<Switch />)}
                    </Form.Item>

                    <Form.Item label="手机号">
                        {getFieldDecorator("phone", {
                            rules: [
                                {
                                    required: true,
                                    message: "请输入手机号"
                                },
                                {

                                    pattern: /^1\d{10}$/,
                                    message: "手机号不正确"

                                }]

                        })(<Input />)}
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6 }}>
                        <Button type="primary" htmlType="submit" >提交</Button>
                    </Form.Item>

                </Form >
            </Spin>


        )
    }
}


const Hoc = Form.create({
    mapPropsToFields: props => ({
        sex: Form.createFormField({
            value: 0
        }),
        isMonitor: Form.createFormField({
            value: true
        })
    })
})

export default withRouter(Hoc(index))
