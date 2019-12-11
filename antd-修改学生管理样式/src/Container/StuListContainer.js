import React from 'react'
import { connect } from "dva"
import StuList from "@/components/StuList/"


//学生列表页，和仓库连接仅做展示
function StuListContainer(props) {

    return <StuList {...props.result} />
}

const mapStateToProps = state => {
    return {
        result: state.student.result
    }
}


export default connect(mapStateToProps, null)(StuListContainer)