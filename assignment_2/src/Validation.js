import React from 'react';

const validation = (props) => {

    let error = null;

    if(props.word < 3){
        error = "Word must be more than 3 letters long!"
    }

    return (
    <span className="errors">{error}</span>
    )
}

export default validation;