import { useEffect, useState } from "react";

const FoodReci = ({history}) => {
    const [foodRecipeList,setFoodRecipeList] = useState([]);
    const [clicker,setClicker] = useState(0);

    useEffect(()=>{
        fetch("http://localhost:5000/api/v1/recipe-list")
        .then(responce=>responce.json())
        .then(result=>{
            setFoodRecipeList(result);
        });
    },
    [clicker]);


    const logOut = () =>{
        localStorage.removeItem("token");
        history.push("/login");
    }

    return (
        <>
            <div>
                Food Reci of
            </div>
            <div>
                {foodRecipeList.map((recipe,i)=>(
                    <div key={i}>
                        <div>{recipe.name}</div>
                        <div>{recipe.description}</div>
                    </div>
                ))}
            </div>
            <button onClick={logOut}>Logout</button>
            <button onClick={()=>{
                setClicker(clicker+1);
                console.log(clicker)
            }}>Click</button>
        </>
    )
}

export default FoodReci
