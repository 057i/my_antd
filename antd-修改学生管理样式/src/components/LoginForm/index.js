import React, { useRef } from 'react'
import styles from "./index.css"
import { connect } from "dva"
import { routerRedux } from "dva"


function Index(props) {
    const userRef = useRef()
    const pwdRef = useRef()
    // console.log(routerRedux)
    return (
        <div className={styles.loginWrapper}>
            <div>
                <label htmlFor="">账号:</label>
                <input ref={userRef} type="text" />
            </div>
            <div>
                <label htmlFor="">密码:</label>
                <input ref={pwdRef} type="password" />
            </div>
            <button onClick={() => {
                props.onLogin(userRef.current.value)

            }}>登录</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        //因为默认的集成了connect-react-router,所以在仓库中有路由方法，直接派发就可以了
        onLogin(value) {
            dispatch({
                type: "login/loginIn",
                payload: value
            })





        }
    }
}
let hoc = connect(null, mapDispatchToProps)(Index)

export default hoc



