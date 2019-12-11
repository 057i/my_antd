import React from 'react'
import LoginForm from "@/components/LoginForm/index.js"
import { connect } from "dva"
import { routerRedux } from "dva"
function LoginContainer(props) {
    return (
        <>
            <LoginForm {...props} />
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin(value) {
            dispatch({
                type: "login/loginIn",
                payload: value
            })

            //因为默认的集成了connect-react-router,所以在仓库中有路由方法，直接派发就可以了
            if (value === "admin") {
                dispatch(routerRedux.push("/student/"))
            }

        }
    }
}
let hoc = connect(null, mapDispatchToProps)(LoginContainer)
