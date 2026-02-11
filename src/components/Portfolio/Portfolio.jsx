import React, { useRef } from "react";
import "./Portfolio.css"
import photo1 from "../../photos/1.webp";
import "./../scroll/fade-in.css"



const Portfolio = () => {
    const portfolioDB = [
        {name:"Service 1",photo:photo1},
        {name:"Service 1",photo:photo1},
        {name:"Service 1",photo:photo1},
        {name:"Service 1",photo:photo1},
    ]
    const indexRef = useRef(0);
    const sliderRef = useRef(null);

    const GAP = 200;
    const currentServices = 3;

    const slideToIndex = () => {
        const card = sliderRef.current.children[0];
        const cardWidth = card.offsetWidth;

        sliderRef.current.style.transform =
            `translateX(-${indexRef.current * (cardWidth + GAP)}px)`;
    };


    const RightArrow = () => {
        if (indexRef.current < portfolioDB.length - 1) {
            indexRef.current++;
            slideToIndex();
        }else {
            indexRef.current-=currentServices;
            slideToIndex()
        }
    };

    const LeftArrow = () => {
        if (indexRef.current > 0) {
            indexRef.current--;
            slideToIndex();
        }else {
            indexRef.current+=currentServices;
            slideToIndex()
        }
    };
    return(
        <div id="portfolio" className="portfolio-main fade-in">
            <h1>My portfolio</h1>
            <div>
                <svg className="leftArrow" onClick={LeftArrow} width="150" height="200" viewBox="0 0 100 50">
                    <polyline points="70,10 55,25 70,40" 
                                fill="none" 
                                stroke="white" 
                                stroke-width="7" 
                                stroke-linecap="round" 
                                stroke-linejoin="round"/>
                </svg>

                <div className="slider-window">
                    <div className="slider-track" ref={sliderRef}>
                        {portfolioDB.map((DB, index) => (
                            <div className="card" key={index}>
                                <img src={DB.photo} alt={DB.name} />
                                <div className="overlay">
                                    <p className="card-title">{DB.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <svg className="rightArrow" onClick={RightArrow} width="150" height="200" viewBox="0 0 100 50">
                    <polyline points="30,10 44,25 30,40" 
                                fill="none" 
                                stroke="white" 
                                stroke-width="7" 
                                stroke-linecap="round" 
                                stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    )
}

export default Portfolio;