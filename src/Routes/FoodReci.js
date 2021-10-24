import { useEffect, useState } from "react";

const FoodReci = ({history}) => {
    const [foodRecipeList,setFoodRecipeList] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/api/v1/recipe-list")
        .then(responce=>responce.json())
        .then(result=>{
            setFoodRecipeList(result);
        });
    },
    []);


    const logOut = () =>{
        localStorage.removeItem("token");
        history.push("/login");
    }

    return (
        <>
           
            <div className="banner-reci">
        <div className="card-reci">
                {foodRecipeList.map((recipe,i)=>(
                    <div key={i}>
                        <div className="name">{recipe.name}
                        <div className="form-field">
                    
                    {/* <input
                        type="name"className="inputbox"
                        placeholder="Name" 
                        value={name}
                        onChange={e => {setname(e.target.value)}}
                    /> */}
                </div>
                        </div>
                        <div className="description">{recipe.description}
                        
                </div>
                        
                    </div>
                ))}
            
            <button onClick={logOut}>Logout</button>
            
           </div>
           </div>
        </>
    )
}

export default FoodReci
