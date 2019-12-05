import React from 'react';

const StateTest = ({inputValue, changeInput})=>{
    return (
        <div>
            <input type="input" onInput = {changeInput}/>
            <p>{inputValue}</p>
        </div>
    );
}

export default StateTest;