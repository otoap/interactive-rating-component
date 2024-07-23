import "./main.css"
import starImage from "/images/icon-star.svg"
import Texts from "./textComponent/Text"
import RateBox from "./rateComponent/Rate"
import { useState } from "react"



export default function Main({rate, setRate, setSubmit}) {
    return <div className="boxDiv">
        <img className="starIMG" src={starImage} alt="star image" />
        <Texts/>
        <RateBox rate={rate} setRate={setRate} setSubmit={setSubmit}/>
    </div>
}