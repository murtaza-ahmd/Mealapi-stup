import {useState} from "react";
import "./style.css";


function generateId (){
    return Math.floor(Math.random()*100);
}
function Todo() {
    const [Todos, setTodos] = useState([]);
    const [Input, setInput] = useState("");
    const handleSubmit = ()=> {
        setTodos(Todos =>Todos.concat({text:Input,id:generateId()}))
        setInput("");
        };
    
    const removeTodo = (id) =>
        setTodos((Todos) => Todos.filter((t) => t.id !== id));
      
  return (
    <>
    <div className="contianer">
    <input className="input"
     type='text'
     value={Input} 
     onChange={(e)=>setInput(e.target.value)}
     placeholder="New Todo"   
     />
    <button className="button" onClick={handleSubmit}>Submit</button>
     <ul className="todo-list">
          {Todos.map(({ text, id }) => (
            <li key={id} className="todo">
              <span>{text}</span>
              <button className="close" onClick={() => removeTodo(id)}>
                X
              </button>
            </li>
          ))}
        </ul>
    </div>
    </>
    );
}
export default Todo;