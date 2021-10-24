import { useState } from "react";
import { useHistory } from "react-router";
import postData from "../Services/postData";


const ForgotPassword = ({setFogotPasswordScreenVisiblity})=>{
    const[phone,setPhone] = useState("");
    const[otpWindowVisiblity,setOtpWindowVisiblity] = useState(false);
    
    const[errorText,setErrorText] = useState("");
    const submitForgotPasswordForm = (e)=>{
        e.preventDefault();
        setErrorText("");
        if(!phone){
            setErrorText("Email is required!");
            return;
        }
        postData("/forgotpassword",{phone}).then(responce=>{
            if(responce.status){
                setOtpWindowVisiblity(true);
            }
        })
        
    }

    return(
        <>
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
        {otpWindowVisiblity && <OtpWindow phone={phone}/>}
        </>
    )
}


const OtpWindow = ({phone})=>{
    const history = useHistory();
    const[resetPasswordWindowVisiblity,setResetPasswordWindowVisiblity] = useState(false);
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
            if(responce.status){
                localStorage.setItem("token",responce.token);
                setResetPasswordWindowVisiblity(true);
            }
            //history.push("/login");
        })

    }

    return(
        <>
         <div className="banner-otp">
        <div className="card-otp">
            <h1>OTP</h1>
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
        {resetPasswordWindowVisiblity && <ResetPasswordWindow/>}
        </>
    )
}

const ResetPasswordWindow = ()=>{
    return(
        <div>
            ResetPasswordWindow
        </div>
    )
}





export default ForgotPassword;