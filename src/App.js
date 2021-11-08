import React, {useState, useEffect} from "react";
import todos from "./apis";

import Form from "./components/Form"
import Section from "./components/Section"
import List from './components/List'
import Confeti from './components/Confeti'

const appTitle ="To-Do App"

const todoesList=[
];

const App = () =>{

    const [todoList,setTodoList] = useState(todoesList);

    useEffect(()=>{
         
        async function fetchTodos(){
            const {data} = await todos.get("/todos");
            setTodoList(data);
        }

        fetchTodos();
    },[]);

    const addTodo = async (item)=>{
        const {data} = await todos.post("/todos", item);
        setTodoList((oldList)=>[...oldList,data]);
    };

    const removeTodo= async (id) =>{
        await todos.delete(`/todos/${id}`);
        setTodoList((oldList)=>oldList.filter((item)=>item._id!==id));
    }

     const editTodo = async(id, item) =>{
        await todos.put(`/todos/${id}`, item);
     }
    return (
    
    <div className="ui container center aligned">
    
        <Section>
            <h1>{appTitle}</h1>
        </Section>

        <Section>
            < Form  addTodo={addTodo}/>
        </Section>

        <Section>
            <List 
                editTodoListProp={editTodo}
                removeTodo={removeTodo} 
                todoList={todoList}
            />
        </Section>
        <Section>
            <Confeti />
        </Section>

    </div>
    );
    
};

export default App;