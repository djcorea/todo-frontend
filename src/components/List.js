import React from 'react';

import Todo from './Todo';

const List =({todoList,removeTodo,editTodoListProp})=>{
    const renderedTodoList = todoList.map(
        (item)=>(
            <Todo 
                title={item.title} 
                compleded={item.completed} 
                removeTodo={(e)=>removeTodo(item._id)}
                editTodoItemProp={(updatedItem) => editTodoListProp(item._id,updatedItem)}  
                key={item.title}/>
        )
    );
    return(
      
        <div className="ui grid center aligned">
            {renderedTodoList}
        </div>
    );
};

export default List;