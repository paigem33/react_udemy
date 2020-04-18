import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="output-div">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default UserOutput