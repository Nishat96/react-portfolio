import React from 'react';
import './Home.css';
import profilePic from './images/mith2.jpg';
import Footer from './Footer';
import AllProject from './AllProject';
import ContactMe from './ContactMe';
import Blog from './Blog';
import About from './About';

const Home = () => {
    return (
        <div className="home-sec" id="home">
            <section className="row profile-info">
                <div className="col-md-7 info-sec">
                    <h3>Hi there!</h3>
                    <div className="inline"></div>
                    <h5 className="name">I'm Nishat Tasnim Mithila</h5>
                    <h5 className="developer">Front-End Developer & UI/UX Designer</h5>
                    <p> Experienced front end developer who is very hard-working and dedicated also loves coding and building websites && Mobile Apps. I can describe myself as having skills on React.js, React-routing, Firebase-authentication, Context-api, Redux, React Native & UI/UX Designer. </p>
                    <a href="https://drive.google.com/file/d/1e_c49Hx5honDOIJS8eKG0O_LDwzjru7G/view?usp=sharing" target="_blank">
                    <button className="download-btn">Download CV</button>
                    </a>
                </div>
                <div className="col-md-4">
                    <img className="pro-pic" src={profilePic} alt=""/>
                </div>

            </section>
            <About></About>
            <AllProject></AllProject>
            <Blog></Blog>
            <ContactMe></ContactMe>

            <Footer></Footer>
        </div>
    );
};

export default Home;
