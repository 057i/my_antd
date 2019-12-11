import React from 'react'
import { Button, Radio, Icon } from "antd"

export default function index() {
    return (
        <div>
            <div>
                <Button type="primary" >点击</Button>

                <Button type="danger" loading   >正在加载</Button>

                <Button type="primary" shape="circle" icon="search"></Button>

                {/* //单选按钮组 */}
                <Radio.Group value="large" >
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small" size="large">Small</Radio.Button>
                </Radio.Group>


                <Button type="primary" shape="round" icon="download" size="large"></Button>

            </div>


            <div>
                线框风格<Icon type="left" style={{ fontSize: "3em" }} />
                实底风格<Icon type="step-forward" theme="filled" style={{ fontSize: "3em" }} />
                双色风格<Icon type="left-circle" theme="twoTone" style={{ fontSize: "3em" }} />
            </div>


        </div>
    )
}
