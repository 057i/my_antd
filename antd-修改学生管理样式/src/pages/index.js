import React, { useState } from 'react'
import Welcome from "@/components/Welcome/"
import UploadAvator from "@/components/UploadAvator/"



export default function index() {

    const [avatorVal, setAvatorVal] = useState("")
    return (
        <>
            <Welcome />
            {/* <UploadAvator value={avatorVal} Change={(newVal) => {
                setAvatorVal(newVal)
                console.log(avatorVal, newVal)
            }} /> */}
        </>

    )
}
