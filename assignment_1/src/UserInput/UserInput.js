import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
    <div className="input-div">
        <input type="text" required/>
        <hr/>
        <label>Name</label>
    </div>
    )
}

export default UserInput