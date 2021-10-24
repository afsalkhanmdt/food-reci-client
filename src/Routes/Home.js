const Home = ({history})=>{
   
    return(
    
      <div className="banner-home">
        <div className="card">
        
<div className="heading">
          <h1>Welcome to </h1>
        
          
            <h2>FoodReci</h2>
          </div>
         
     <div className="content">
       
     
      <button onClick={()=>{history.push("/login")}}type="button" className="login-btn">Login</button>
      <button onClick={()=>{history.push("/signup")}}type="button" className="login-btn">SignUp</button>
   </div>
   </div>
   </div>
  
    
    )
  }
 
  

export default Home;