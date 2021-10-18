import { useState } from "react";

const ForgotPassword = ({setFogotPasswordScreenVisiblity})=>{
    const[email,setEmail] = useState("");
    const[errorText,setErrorText] = useState("");
    const submitForgotPasswordForm = (e)=>{
        e.preventDefault();
        setErrorText("");
        if(!email){
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
                        placeholder="Email"
                        value={email}
                        onChange={e => {setEmail(e.target.value)}}
                    />
                </div>
                <div className="form-error-text">{errorText}</div>
                <button type="submit">Send Otp</button>
            </form>
            <div onClick={()=>{setFogotPasswordScreenVisiblity(false)}}><h5>close</h5></div>
        </div>
        </div>
        </div>
    )
}

export default ForgotPassword;