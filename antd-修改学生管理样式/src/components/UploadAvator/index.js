import React, { useState } from 'react'
import { Button, Upload, Tag, Spin } from "antd"
import styles from "./index.css"

function getAvatorContent(url) {
    console.log(url === true)
    if (url) {
        return <img src={url} />
    } else {
        return <Button type="primary" icon="upload">上传头像</Button>
    }
}


export default function index({ avatorValue, Change }) {
    const [avatorloading, setAvatorLoading] = useState(false)
    return (

        <Upload listType="picture-card" //上传样式
            showUploadList={false}  //不展示上传列表
            action="/api/upload" //上传时候的地址，代理已经在umirc配置好
            name="imagefile"
            onChange={  //上传文件改变时的状态
                data => {  //这个参数是上传时候的状态参数

                    setAvatorLoading(true)
                    if (data.file.response) {
                        //当服务器有响应的时候，更改hook中的数据，并且从服务器返回的path中读取渲染到页面

                        Change && Change(data.file.response.path)
                        setAvatorLoading(false)
                    }
                }
            }>
            <Spin spinning={avatorloading}>
                <div className={styles.imgBox}>
                    {getAvatorContent(avatorValue)}
                </div>
            </Spin>

        </Upload>

    )
}
