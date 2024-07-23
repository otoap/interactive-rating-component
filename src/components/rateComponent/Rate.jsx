import "./rate.css"
import { useState } from "react"

export default function RateBox({rate, setRate, setSubmit}) {
    const arr = [1, 2, 3, 4, 5];

    return <div className="buttonsDiv">
        <div className="score">
            {arr.map(num => (
                <button key={num} onClick={()=> setRate(num)} style={{background: rate == num ? "var(--Medium-Gray, #7C8798)" : "", color: rate == num ? "var(--Pure-White, #FFF)" : ""}}>{num}</button>
            ))}
        </div>
        <div className="submitBtnDiv">
            <button className="submitBtn" onClick={() => rate && setSubmit(false)}>SUBMIT</button>
        </div>
    </div>
}