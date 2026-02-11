import React from "react";
import "./AboutMe.css"
import "./../scroll/fade-in.css"

const AboutMe = () => {
    return (
        <div id="aboutMe" className="about-main fade-in">
            <div className="AboutMe">
                <h1>My first second third name</h1>
                <h3>Qualification</h3>
                <p>Description or education</p>
                <p><b>My specialties</b></p>
                <ol>
                    <li className="list">.....</li>
                    <li className="list">.....</li>
                    <li className="list">.....</li>
                </ol>
                <p><b>Education & Certificate</b></p>
                <ol>
                    <li className="list">.....</li>
                    <li className="list">.....</li>
                    <li className="list">.....</li>
                </ol>
                <button className="portfolioBtn"><a href="#portfolio">View portfolio</a></button>
            </div>
            <img src="#" alt="my image" />
        </div>
    )
}

export default AboutMe;
