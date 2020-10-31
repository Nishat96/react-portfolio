import React from 'react';
import './Footer.css';
import { FaLinkedin } from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="row footer-sec">
            <div className="col-md-12">
            <a href="https://www.linkedin.com/in/nishat-tasnim-mithila-78b96b130/" target="_blank">
                <button className="linkedIn-btn"> <FaLinkedin /></button>
             </a>  
             <a href="https://github.com/Nishat96" target="_blank">
                <button className="github-btn"> <FaGithub/> </button>
              </a>
                <p className="bottom-line">©2020. All rights reserved. Nishat Tasnim Mithila. </p>
            </div>
        </div>
    );
};

export default Footer;