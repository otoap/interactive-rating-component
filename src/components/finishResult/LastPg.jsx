import "./lastPg.css"

export default function LastPage({rate}) {
    return <div className="lastDiv">
        <img src="/images/illustration-thank-you.svg" alt="thx svg" />
        <h2 >You selected {rate} out of 5</h2>
        <h1 className="lastH1">Thank you!</h1>
        <p className="lastP">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
}