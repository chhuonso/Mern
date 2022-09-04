import React from 'react'

const Todo = (props) => {

    const todoClasses = [];
    if(props.todo.complete){
        todoClasses.push("line-through")
    }


    return (
        <div >
            <span className={todoClasses.join(" ")} >{props.todo.text}</span>
            <input onChange={(event) => {
                props.handleToggleComplete(props.index);
                }} checked={props.todo.complete} type="checkbox" />
            <button onClick={(event) => {
                props.handleTodoDelete(props.index);
                }}> Delete

            </button>
        </div>
    )
}

export default Todo