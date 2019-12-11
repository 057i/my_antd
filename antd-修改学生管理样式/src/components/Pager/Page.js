import React from "react"
import ReactDOM from "react-dom"
import styles from "./index.css"

export default function Page(props) {
    let arr = [];

    let attr = props.props
    for (let i = props.start; i <= props.end; i++) {
        arr.push(<span className={attr.current === i ? `${styles.item} ${styles.active}` : styles.item} key={i + "__"}
            onClick={() => props.handle(i, attr)}>{i}</span>)
    }
    return (<>{arr}</>)
}
