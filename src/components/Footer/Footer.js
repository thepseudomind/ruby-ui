import React from 'react';

const Footer = ()=> {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__content--left">
                    <h1 className="footer__content--left--text">Are you ready to get started?</h1>
                </div>
                <div className="footer__content--right">
                    <a href="#r" className="footer__content--right--btn">View docs</a>
                </div>
            </div>
            <div className="footer__content">
                <div className="footer__content--left">
                    <img alt="RubyUI Logo" className="footer__logo"/>
                </div>
                <div className="footer__content--right">
                    <ul className="footer__menu">
                        <li className="footer__menu--item">Home</li>
                        <li className="footer__menu--item">About</li>
                        <li className="footer__menu--item">Why use Ruby?</li>
                        <li className="footer__menu--item">Install</li>
                        <li className="footer__menu--item">Contact</li>
                    </ul>
                </div>
            </div>
            <div className="footer__credits">
                <div className="footer__credits--left">
                    <p>&copy; Designed with <span className="footer__heart" role="img" aria-label="Heart">❤️</span> by Oderinde Kehinde </p>
                </div>
                <div className="footer__credits--right">
                    <ul className="footer__credits--menu">
                        <li className="footer__credits--menu--item">Terms</li>
                        <li className="footer__credits--menu--item">Privacy</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;