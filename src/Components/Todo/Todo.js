import React from 'react';
import './Todo.css';

const todo = (props)=>{
    return (
        <div>
            <img src={'close.png'} className="icon-close" onClick={props.delete}></img>
            <li className={props.checked} onClick={props.click}>
                <p>{props.task}</p>
            </li>
        </div>
    )
}
export default todo;