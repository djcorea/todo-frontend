import React,{useState} from 'react';

const Form = ({addTodo}) =>{

    const [inputValue, setInputValue] = useState("");

    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim()===""){
            setInputValue("");
            return;
        };
        addTodo({title: inputValue, completed: false});
        setInputValue("");
    }
    return(
        <div>
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="ui grid center aligned">
                <div className="row">
                <div className="column five wide">
                    <input 
                        type="text" 
                        name="todoInput" 
                        id="todoInput" 
                        placeholder="Enter something to do"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>   
                
                <div className="column one wide">
                    <button 
                    type="submit" 
                    className="ui button circular icon blue">
                        <i className="white plus icon"></i>
                    </button>
                </div>
                </div>
            </div>
            </form>
        </div>
    );
}

export default Form;