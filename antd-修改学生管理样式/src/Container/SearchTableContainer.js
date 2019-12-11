import React from 'react'
import SearchTable from "@/components/SearchTable/"
import { connect } from "dva"

function SearchTableContainer(props) {
    return (
        <SearchTable {...props} />
    )
}
const mapStateToProps = state => {
    return {
        sex: state.student.conditions.sex,
        searchVal: state.student.conditions.searchVal
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onSearchValChange(val) {
            dispatch({
                type: "student/setConditions",
                payload: {
                    searchVal: val
                }
            })
        },
        onSearch(config) {
            dispatch({
                type: "student/getSearch",
                payload: {
                    ...config,
                    page: 1,
                    panelNumber: 5,
                    limit: 10
                }
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchTableContainer)
