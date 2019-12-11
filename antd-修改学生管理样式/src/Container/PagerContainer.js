import React from 'react'
import PagerIndex from "@/components/Pager/PagerIndex"
import { connect } from "dva"



function PagerContainer(props) {
    return <PagerIndex {...props} />
}
const mapStateToProps = state => {
    return {
        current: state.student.conditions.page,
        pageSize: state.student.conditions.limit,
        total: state.student.result.count,
        panelNumber: state.student.conditions.panelNumber
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onChange(pageNum) {
            dispatch({
                type: "student/pageChange",
                payload: pageNum
            })
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PagerContainer)
