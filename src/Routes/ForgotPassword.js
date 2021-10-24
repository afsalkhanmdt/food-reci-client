import { useState } from "react";
import postData from "../Services/postData";


const ForgotPassword = ({setFogotPasswordScreenVisiblity})=>{
    const[phone,setPhone] = useState("");
    
    const[errorText,setErrorText] = useState("");
    const submitForgotPasswordForm = (e)=>{
        e.preventDefault();
        setErrorText("");
        postData("/forgotpassword",{phone})
        if(!phone){
            setErrorText("Email is required!");
            return;
        }
    }

    return(
        <div>
             <div className="banner-forgotpassword">
            <div className="card-forgotpassword">
            <h4>Forgot Password</h4>
            <form onSubmit={submitForgotPasswordForm}>
                <div className="form-field">
                   
                    <input type="text" className="emailbox"
                        placeholder="Phone"
                        value={phone}
                        onChange={e => {setPhone(e.target.value)}}
                    />
                </div>
                <div className="form-error-text">{errorText}</div>
                <button type="submit" className="otp-btn" >Send Otp</button>
            </form>
            <div onClick={()=>{setFogotPasswordScreenVisiblity(false)}}><h5>close</h5></div>
        </div>
        </div>
        </div>
    )
}
const OtpWindow = ({phone})=>{
    const history = useHistory();
    const [otp, setOtp] = useState("");
    const[errorText,setErrorText] = useState("");
    const submit_otp = (e)=>{
        e.preventDefault();
        setErrorText("");
        postData("/forgotpassword/otp-verification",{otp,phone})
        .then((responce)=>{
            if(!responce.status){
                setErrorText(responce.data);
                return;
            }
            history.push("/login");
        })

    }

    return(
         <div className="banner-otp">
        <div className="card-otp">
            <h8>OTP</h8>
            <form onSubmit={submit_otp}>
                <label>Otp</label>
                <input
                value={otp}
                type="text"className="otp"
                onChange={(e)=>{
                    setOtp(e.target.value)
                }}/>
                
                <button type="submit"className="otpbtn">Submit</button>
                <div className="form-error-text">{errorText}</div>
            </form>
            </div>
        </div>
    )
}



export default ForgotPassword;