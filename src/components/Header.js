import React from 'react';
import emerald from '../img/emerald.png';
import ruby from '../img/ruby.png';
import form from '../img/form.png';
import topaz from '../img/topaz.png';
import sapphire from '../img/sapphire.png';
import rocket from '../img/rocket.png';
import emerald2 from '../img/emerald-cloud.png';

const Header = ()=>{
    return (
        <header className="header">
            <img src="" alt="RubyUILogo" className="header__logo"/>
            <h1 className="header__text">
                <span className="header__text--title">
                    Ruby UI helps you quickly build React webapps faster.
                </span>
                <span className="header__text--subtitle">
                    Easily customizable React UI components designed to speed up your development process.
                </span>
            </h1>
            <a href="/docs" className="header__btn">View Docs</a>
            {/* Elements positioned not realted to the flexbox */}
            <span className="header__leftbox"></span>
            <span className="header__rightbox"></span>
            <img src={emerald} alt="Emerald" className="header__gems header__gems--1"/>
            <img src={ruby} alt="Ruby" className="header__gems header__gems--2"/>
            <img src={form} alt="Ruby" className="header__gems header__gems--3"/>
            <img src={rocket} alt="Ruby" className="header__gems header__gems--4"/>
            <img src={emerald2} alt="Ruby" className="header__gems header__gems--5"/>
            <img src={topaz} alt="Ruby" className="header__gems header__gems--6"/>
            <img src={sapphire} alt="Ruby" className="header__gems header__gems--7"/>
            {/* The End */}
        </header>
    );
}

export default Header;