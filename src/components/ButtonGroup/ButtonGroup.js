import React from 'react';

const ButtonGroup = ()=>{
    return (
        <div className="header__btns">
            <a href="#h" className="header__btn">View Docs</a>
            <a href="#t" className="header__btn header__btn--active">Install <span className="header__btn--version">v.1.0.0</span></a>
        </div>
    );
}

export default ButtonGroup;