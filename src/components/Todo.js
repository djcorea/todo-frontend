import React, { useState } from "react";

const Todo = ({title,completed,removeTodo, editTodoItemProp}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value,setValue] = useState(title);
  const [temporalValue,setTemporalValue] = useState(title);
  const [todoCompleted, setTodoCompleted] = useState(completed);

  const handleDivDoubleClick = () => {
    setIsEditing(true);
  };

 

  const handleInputChange = (e) =>{
     setTemporalValue(e.target.value);
  };

  const handleCompleteButton =() =>{
    setTodoCompleted(
      (oldCompleted)=>{
        const newState = !todoCompleted;
        editTodoItemProp({completed: newState});
        return newState;
      }
    );
  }

  const handleInputKeyDown= (e) => {
    const key = e.keyCode;
    if(key===13){
      editTodoItemProp({title: temporalValue});
      setValue(temporalValue);
      setIsEditing(false);
    }else if(key===27){
      setTemporalValue(value)
      setIsEditing(false);
    }
};

  return (
    
    <div className="row" >
    
      {isEditing ? 
      
        <div className="ui input fluid column seven wide">
          <div className="ui input fluid">
            <input 
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            autoFocus={true}
            value={temporalValue}/>
          </div>
        </div>:
        <>
          <div className="column five wide" onDoubleClick={handleDivDoubleClick}>
            <h2 className={"ui header "+ (todoCompleted ? "green" : "")}>{value}</h2>
          </div>

          <div className="column one wide">
            <button 
              className={"ui button circular icon "+ (todoCompleted?"orange":"green")}
              onClick={handleCompleteButton}
            >
              <i className="check icon"></i>
            </button>
          </div>

          <div className="column one wide">
            <button
              onClick={removeTodo}
              className="ui button circular icon red"
            >
              <i className="remove icon"></i>
            </button>
          </div>
        </>
        }
    </div>
  );
};

export default Todo;
