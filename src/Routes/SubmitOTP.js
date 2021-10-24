import { useState } from "react";

const SubmitOTP = () => {
    const[errorText,setErrorText] = useState("");
    const [otp, setOtp] = useState("")
    const submitOTPForm = (e) => {
        e.preventDefault();
        setErrorText("")
        if(!otp){
            setErrorText("OTP is required!")
            return
        }
    }
    return(
        <div className="banner-otpp">
        <div className="card-otpp">
            <form onSubmit={submitOTPForm}>
                <div className="formmfield">
                    <label>OTP</label>
                    <input type="number"className="otpp-box"placeholder="Enter OTP" value={otp} onChange={e => {setOtp(e.target.value)}} />
                </div>
                <button type="submit">Verify OTP</button>
            </form>
            <div className="form-error-text">{errorText}</div>
        </div>
        </div>
    )
}

export default SubmitOTP