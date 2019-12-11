import React from "react"
import ReactDOM from "react-dom"

import Page from "./Page"
import styles from "./index.css"

export default function TurnPage(props) {
    const min = getMinPage(props);
    const max = getMaxPage(min, props.panelNumber, props)
    let totalPage = getTotalPage(props)

    // console.log(props, min, max, totalPage)

    return (<>
        <span className={props.current === 1 ? `${styles.item} ${styles.disabled}` : styles.item}
            onClick={() => toPage(1, props)}>首页</span>
        <span className={props.current === 1 ? `${styles.item} ${styles.disabled}` : styles.item}
            onClick={() => toPage(props.current - 1, props)}>上一页</span>
        <Page handle={toPage} start={min} end={max} current={props.current} props={props} />
        <span className={props.current === totalPage ? `${styles.item} ${styles.disabled}` : styles.item}
            onClick={() => toPage(props.current + 1, props)}>下一页</span>
        <span className={props.current === totalPage ? `${styles.item} ${styles.disabled}` : styles.item}
            onClick={() => toPage(totalPage, props)}>尾页</span>

    </>)

}


//跳转页面
function toPage(index, props) {
    // console.log(index, props.handle)
    //跳转页面等于当前页面，不操作
    if (index == props.current) {
        return
    }
    //跳转页面大于最大页面，不操作
    if (index > getTotalPage(props)) {

        return
    }
    //跳转页面小于第一页，不操作
    if (index < 1) {
        return
    }

    props.handle && props.handle(index)
}


//获取到展示最小页数
function getMinPage(props) {
    let min = props.current - Math.floor(props.panelNumber / 2)
    if (min < 1) {
        min = 1
    }
    return min
}


//获取到展示最大页数
function getMaxPage(min, panelNumber, props) {
    let max = min + panelNumber - 1;
    console.log(max)
    if (max >= getTotalPage(props)) {
        max = getTotalPage(props)
    }
    return max
}


function getTotalPage(props) {
    let total = Math.ceil(props.total / props.limit)

    return total

}



