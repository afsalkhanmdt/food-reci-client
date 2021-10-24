import React, { useEffect } from 'react'
import { useState } from 'react'
import API_url from '../Services/API_url';
import fileUpload from '../Services/fileUpload';
import postData from '../Services/postData';

const CreateRecipe = () => {

    const[catogoryList,setCatogoryList] = useState([]);
    const[recipe,setRecipe] = useState({
        name: "",
        catogory: "",
        incredians: "",
        description: ""
    });
    const {name,catogory,incredians,description} = recipe;

    const[file,setFile] = useState(null);
    useEffect(()=>{
        fetch(API_url+"/category-list")
        .then(responce=>responce.json())
        .then(result=>{
            if(result.data && result.data.length){
                setCatogoryList(result.data)
            }
        });
    },[]);
    const onChange = (key,value)=>{
        setRecipe(prev=>(
            {
               ...prev,
               [key]:value 
            }
            )
        )
    }

    const save_recipe = (e)=>{
        e.preventDefault();
        console.log(file);
        const formData = new FormData();
        formData.append("image",file);
        fileUpload("/upload",formData).then(result=>{
            console.log(result);
        });
        return;
        postData("/create-recipe",recipe).then(result=>{
            console.log(result);
        })
    }

    return (
        <div className="banner-recipe">
        <div className="card-recipe">

        <div className="recipe-section">
            <h1>Create Recipe</h1>
            <form onSubmit={save_recipe}>
                    
                <div className="form_fielld">
                    
                    <input type="text" className="createinput"
                        placeholder="Recipe Name"
                        value={name}
                        onChange={e => {onChange("name",e.target.value)}}
                    />
                </div>
                <div className="form_fielld">
                   
                    <select
                    value={catogory} className="createinput"
                    onChange={e => {onChange("catogory",e.target.value)}}
                    >
                        <option value="">Select Category </option>
                        {catogoryList.map((value,i)=>(
                            <option key={i} value={value.name}>{value.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form_fielld">
                    
                    <textarea                  
                    value={incredians}className="createinput"
                    onChange={e => {onChange("incredians",e.target.value)}}
                    />
                </div>
                <div className="form_fielld">
                    
                    <textarea                    
                    value={description}className="createinput"
                    onChange={e => {onChange("description",e.target.value)}}
                    />
                </div>
                <div className="form_fielld">
                    
                    <input type="file" className="createinput"
                    onChange={e => {
                        setFile(e.target.files[0])
                    }}/>
                </div>
                <button type="submit" className="btn-save">Save</button>
           
            </form>
            
        </div>
        </div>
        </div>
    )
}

export default CreateRecipe
