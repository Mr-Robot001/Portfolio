import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer__container container">
    <h5 className="footer__title">
    Copyright©2022 | All rights reserved 
    </h5>
    <ul className="footer__list">
    <li>
    <a href="#" className="footer__link">Go to top <i className="uil uil-arrow-up footer__up-arrow"></i></a>
    </li>
    </ul>
    </div>
    
    </footer>
  )
}

export default Footer