import React from "react";
import "./Header.css"

const Header = () => {
    return (
        <header className="fade-in">
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#aboutMe">About Me</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;