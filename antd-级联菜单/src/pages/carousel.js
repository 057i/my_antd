import React, { useRef } from 'react'
import { Carousel, Button } from "antd"
import img1 from "@/assets/img1.jpg"
import img2 from "@/assets/img2.jpg"
import img3 from "@/assets/img3.jpg"




export default function carousel() {
    const imgs = [img1, img2, img3]
    const cref = useRef()

    const carouselConf = imgs.map((elm, index) => {
        return <a href="#" key={index}>
            <img src={elm} style={{ width: 500, height: 500 }} />
        </a>
    })

    return (
        <>
            <div style={{ width: 500, height: 500, overflow: "hidden" }}>
                <Carousel style={{ background: "#364d79", width: 500, height: 500 }} ref={cref} >
                    {carouselConf}
                </Carousel>
            </div >
            <Button onClick={() => {

                cref.current.prev()
            }}>上一张</Button>
            <Button onClick={() => {
                cref.current.next()
            }}>下一张</Button>
        </>

    )
}
