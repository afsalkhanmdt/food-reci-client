import { useState } from "react";
import postData from "../Services/postData";
import ForgotPassword from "./ForgotPassword";

const Login = ({history}) => {
    const[userName,setUserName] = useState("");
    const[password,setPassword] = useState("");
    const[errorText,setErrorText] = useState("");
    const[fogotPasswordScreenVisiblity, setFogotPasswordScreenVisiblity] = useState(false);
    if(localStorage.getItem("user")){
        history.push("/food-reci");
        return <></>;
    }

    const login_call = (e) => {
        e.preventDefault();
        setErrorText("");
        if(userName === "" || password === ""){
            setErrorText("Both fields are required!");
            return;
        }

        postData("/login",{
            userName,
            password
        })
        .then(responce=>{
            if(!responce.status){
                setErrorText(responce.data);
                return;
            }
            localStorage.setItem("token",responce.token);
            history.push("/food-reci");
        });
    }
    
    return (
        <div className="banner-login">
            <div className="card-login">
        <div className="login-section">
            <h3>Login</h3>
            <form onSubmit={login_call}>
                <div className="form-field">
                    
                  
                    <input type="text" className="inputbox"
                        placeholder="User Name"
                        value={userName}
                        onChange={e => {setUserName(e.target.value)}}
                        
                    />
                </div>

                <div className="form-field">
                    
                    <input
                        type="password"className="inputbox"
                        placeholder="Password" 
                        value={password}
                        onChange={e => {setPassword(e.target.value)}}
                    />
                </div>
                <div className="form-error-text">{errorText}</div>
                <button type="submit" className="submit-btn">Login</button>
            </form>
            <div onClick={()=>{setFogotPasswordScreenVisiblity(true)}}>Forgot Password?</div>
            {fogotPasswordScreenVisiblity
            && <ForgotPassword setFogotPasswordScreenVisiblity={setFogotPasswordScreenVisiblity}/>
            }
            
        </div>
        </div>
        </div>
    )
}

export default Login
