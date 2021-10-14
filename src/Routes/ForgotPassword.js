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
            <h1>Forgot Password</h1>
            <form onSubmit={submitForgotPasswordForm}>
                <div className="form-field">
                    <label>Email</label>
                    <input type="text"
                        placeholder="Email"
                        value={email}
                        onChange={e => {setEmail(e.target.value)}}
                    />
                </div>
                <div className="form-error-text">{errorText}</div>
                <button type="submit">Send Otp</button>
            </form>
            <div onClick={()=>{setFogotPasswordScreenVisiblity(false)}}>close</div>
        </div>
    )
}

export default ForgotPassword;