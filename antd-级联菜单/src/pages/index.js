import React, { useState, useEffect } from 'react'
import { Cascader, Button } from "antd"
import getArea from "@/getArea.js"


export default function index() {
    const [option, setOptions] = useState([])
    const [area, setArea] = useState([])

    //异步做第一次的获取数据，只获取一次
    useEffect(() => {
        getArea(option).then(res => {
            console.log(res)
            let result = res.map(elm => {
                return { label: elm.areaName, value: elm.id, isLeaf: false }
            })

            setArea(result)
        })
    }, [])


    return (<>

        {/* 思路：每次点击，获取当前选中位置的id，然后用这个id去请求地址，每一次返回，都添加到children属性中去 */}
        <Cascader

            onChange={(label, selectedOptions) => {
                const strArr = []
                selectedOptions.forEach(elm => {

                    strArr.push(elm.label)
                })
                setOptions(strArr)
            }}


            loadData={selectedOptions => {
                //获取到最后一项
                const opt = selectedOptions[selectedOptions.length - 1];
                opt.loading = true;
                const id = opt.value;


                getArea(id).then(res => {
                    opt.loading = false;
                    opt.children = res.map(elm => {
                        return {
                            label: elm.areaName,
                            value: elm.id,
                            isLeaf: selectedOptions.length == 3
                            // 判断是否叶子节点
                        }
                    })
                    console.log(area, option)
                })
                setOptions([...option])
            }}
            options={area}
        />

        <Button onClick={() => {
            console.log(option)
        }}>获取当前值</Button>

    </>)
}





// const options = [
//     {
//         value: 'zhejiang',
//         label: 'Zhejiang',
//         isLeaf: false,
//     },
//     {
//         value: 'jiangsu',
//         label: 'Jiangsu',
//         isLeaf: false,
//     },
// ];

// export default class LazyOptions extends React.Component {
//     state = {
//         options,
//     };

//     onChange = (value, selectedOptions) => {
//         console.log(value, selectedOptions);
//     };

//     loadData = selectedOptions => {
//         const targetOption = selectedOptions[selectedOptions.length - 1];
//         targetOption.loading = true;

//         // load options lazily
//         setTimeout(() => {
//             targetOption.loading = false;
//             targetOption.children = [
//                 {
//                     label: `${targetOption.label} Dynamic 1`,
//                     value: 'dynamic1',
//                 },
//                 {
//                     label: `${targetOption.label} Dynamic 2`,
//                     value: 'dynamic2',
//                 },
//             ];
//             this.setState({
//                 options: [...this.state.options],
//             });
//         }, 1000);
//     };

//     render() {
//         return (
//             <Cascader
//                 options={this.state.options}
//                 loadData={this.loadData}
//                 onChange={this.onChange}
//                 changeOnSelect
//             />
//         );
//     }
// }


