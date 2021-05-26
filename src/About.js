import React from 'react';
import './About.css';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

const About = () => {
    return (
        <div className="about-sec" id="about">
            <div className="about">
                <h2 className="about-myself"> About Myself </h2>
                <div className="inline-about"></div>
            </div>
            <div className="row about-row">
                <div className="col-md-7">
                    <p> I am Nishat Tasnim Mithila, who completed her graduation in this year from <span
                        className="varsity">Daffodil International University</span> , CSE Department. </p>
                    I have done a Web Development course from Programming Hero. It was a great journey. Through this
                    course I have got my skill at:
                    React.js, React-routing, React-hooks, Context-API, also learned about Git, Chrome dev tools.
                </div>
                <div className="col-md-4">
                    <h3 className="skill">Job-related Skills:</h3>
                    <ul>
                        <li><span className="varsity"> Programming Language Skills: </span> JavaScript, C</li>
                        <li><span className="varsity"> Web Development Skills: </span> Html5, Css3, Bootstrap4, Es6,
                            React.js, React-routing, React-hooks, Context-API, Firebase-auth
                        </li>
                        <li><span className="varsity"> Mobile Development Skills: </span> React Native</li>
                        <li><span className="varsity"> UI/UX Design: </span> Figma, Adobe Xd</li>
                        <li><span className="varsity">Operating System Skills: </span> Windows, LINUX</li>
                    </ul>
                </div>
            </div>
            <div className="reach-me">
                <h3>Wanna reach me? Cool!</h3>
                <a href="https://www.linkedin.com/in/nishat-tasnim-mithila-78b96b130/" target="_blank">
                    <button className="linkedIn-btn"><FaLinkedin/>LINKEDIN</button>
                </a>
                <a href="https://github.com/Nishat96" target="_blank">
                    <button className="github-btn"><FaGithub/>GITHUB</button>
                </a>
            </div>
        </div>
    );
};

export default About;
