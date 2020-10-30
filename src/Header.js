import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-main">
              <nav class="header-sec navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

           
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#projects">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#blog">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">Contact me</a>
      </li>
     
    </ul>
  </div>
  
</nav>
        </div>
    );
};

export default Header;