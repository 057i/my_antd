import React from 'react'
import StuList from "@/Container/StuListContainer"
import Pager from "@/Container/PagerContainer"
import SearchTable from "@/Container/SearchTableContainer"

export default function index() {
    return (<>
        <SearchTable />
        <StuList />
        <Pager />

    </>)

}
