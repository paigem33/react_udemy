import React from 'react';

const letter = (props) => {
    return (
    <span onClick={props.delete}>{props.letter}</span>
    )
}

export default letter;