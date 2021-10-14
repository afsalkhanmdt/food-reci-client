import { useState } from "react";

const Home = ()=>{
  const[todos,setTodos] = useState([]);
  const [task,setTask] = useState("");
    
  const addTodos = (e)=>{
    e.preventDefault();
    setTodos(prev=>[...prev,task]);
    setTask("");
  }
    return(
      <>
      <h1>
        Home
      </h1>
      <div>
        {todos.map(todos =><div>{todos}</div>)}
      </div>
      <form onSubmit={addTodos}>
        <input type="text"
        value={task}
        onChange={e => {setTask(e.target.value)}}
        />
        <button>Add</button>
      </form>
      
      </>
    )
}

export default Home;