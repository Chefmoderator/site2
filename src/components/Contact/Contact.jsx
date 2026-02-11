import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <footer id="contact" className="fade-in">
            <div className="contact-main">
                
                <div className="slogan">
                    <h2>Your Beauty</h2>
                    <hr />
                    <p>Description</p>
                </div>

                <div className="navigation">
                    <h3>Navigation</h3>
                    <hr />
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#aboutMe">About Me</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                    </ul>
                </div>

                <div className="contact">
                    <h3>Contacts</h3>
                    <hr />
                    <p>+38(0**) *** ** **</p>
                    <p>yourmail@gmail.com</p>
                    <p>Location</p>

                    <div className="icons">
                        <a href="#"><img src="#" alt="Social Networ" /></a>
                        <a href="#"><img src="#" alt="Social Networ" /></a>
                    </div>
                </div>
            </div>
            <hr />
            <p className="copyright">
                © 2025 Your Beauty. All rights reserved.
            </p>
        </footer>
    );
};

export default Contact;
