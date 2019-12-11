import React from 'react'
import Menu from "@/components/Menu/"
import { connect } from "dva"


//使用仓库和Menu组件结合
function MenuContainer(props) {
    return <Menu {...props} />
}
const mapStateToProps = state => {
    return {
        loginName: state.login
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoginOut() {
            dispatch({ type: "login/loginOut" })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer)


