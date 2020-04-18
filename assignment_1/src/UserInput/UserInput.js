import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
    <div className="input-div">
        <input type="text" required onChange={props.changed}/>
        <hr/>
        <label>{props.children}</label>
    </div>
    )
}

export default UserInput