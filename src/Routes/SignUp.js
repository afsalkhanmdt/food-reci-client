import { useState } from "react";
import { useHistory } from "react-router";
import postData from "../Services/postData";

const SignUp = ({history}) => {

    const[otpScreenVisibility,setOtpScreenVisibility] = useState(false);
    const[errorText,setErrorText] = useState("");
    const[userData,setUserData] = useState({
        userName: "",
        name:"",
        email: "",
        phone : "",
        password: "",
        confirmPassword: ""
    });

    const {
        userName,
        name,
        email,
        phone,
        password,
        confirmPassword
    } = userData;


    if(localStorage.getItem("user")){
        history.push("/food-reci");
        return <></>;
    }

    const signup_call = (e) =>{
        e.preventDefault();
        setErrorText("");
        if(!userName ||
            !name ||
            !email ||
            !password ||
            !confirmPassword){
                setErrorText("Please fill all required fields");
                return;
        }
        if(password !== confirmPassword){
            setErrorText("Password deos not match the confirm password!");
            return;
        }
        postData("/signup",userData)
        .then(result=>{
            if(!result.status){
                setErrorText(result.data);
                return;
            }
            setOtpScreenVisibility(true);
        })

    }

    const on_change = (value,key)=>{
        setUserData((prev)=>(
            {
                ...prev,
                [key] : value
            }
        ))
    }

    return (
        <div className="banner-signup">
            <div className="card-signup">
        <div className="ssignup-section">
            <h6>Sign Up</h6>
            <form onSubmit={signup_call}>

                <div className="formfield">
                  
                    <input type="text" className="input-box"
                        placeholder="Name"
                        value={name}
                        onChange={e => {
                            on_change(e.target.value,"name")
                            }
                        }
                    />
                </div>

                <div className="formfield">
                   
                    <input type="text"className="input-box"
                        placeholder="User Name"
                        value={userName}
                        onChange={e => {
                            on_change(e.target.value,"userName")
                            }
                        }
                    />
                </div>

                <div className="formfield">
                   
                        <input type="text"className="input-box"
                        placeholder="Email"
                        value={email}
                        onChange={e => {
                            on_change(e.target.value,"email")
                            }
                        }
                    />
                </div>

                <div className="formfield">
                    
                    <input type="text"className="input-box"
                        placeholder="Phone"
                        value={phone}
                        onChange={e => {
                            on_change(e.target.value,"phone")
                            }
                        }
                    />
                </div>

                <div className="formfield">
                    
                   
                    <input
                        type="password"className="input-box"
                        placeholder="Password" 
                        value={password}
                        onChange={e => {
                            on_change(e.target.value,"password")
                            }
                        }
                    />
                </div>

                <div className="formfield">
                    
                   
                    <input
                        type="password"className="input-box"
                        placeholder="Confirm Password" 
                        value={confirmPassword}
                        onChange={e => {
                            on_change(e.target.value,"confirmPassword")
                            }
                        }
                    />
                </div>
                



                <div className="form-error-text">{errorText}</div>
                <button type="submit"className="login-btn">Sign Up</button>
            </form>           
            {otpScreenVisibility && <OtpWindow phone={phone}/>}
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
        postData("/signup/otp-verification",{otp,phone})
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

export default SignUp
