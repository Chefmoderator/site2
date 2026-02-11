import React, { useRef } from "react";
import "./Services.css"
import photo1 from "../../photos/1.webp";
import "./../scroll/fade-in.css"



const Services = () => {
    const servicesDB = [
        {name:"Service 1",shortDescription:"lorem",duration:"40 min",price:"40$",photoPath:photo1},
        {name:"Service 2",shortDescription:"lorem",duration:"40 min",price:"40$",photoPath:photo1},
        {name:"Service 3",shortDescription:"lorem",duration:"40 min",price:"40$",photoPath:photo1},
        {name:"Service 4",shortDescription:"lorem",duration:"40 min",price:"40$",photoPath:photo1},
        {name:"Service 5",shortDescription:"lorem",duration:"40 min",price:"40$",photoPath:photo1},
        {name:"Service 6",shortDescription:"lorem",duration:"40 min",price:"40$",photoPath:photo1}
    ]
    const indexRef = useRef(0);
    const sliderRef = useRef(null);

    const GAP = 200;
    const currentServices = 5;

    const slideToIndex = () => {
        const card = sliderRef.current.children[0];
        const cardWidth = card.offsetWidth;

        sliderRef.current.style.transform =
            `translateX(-${indexRef.current * (cardWidth + GAP)}px)`;
    };


    const RightArrow = () => {
        if (indexRef.current < servicesDB.length - 1) {
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


    return (
        <div id="services" className="services-main fade-in">
            <h1>My services</h1>
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
                    <div ref={sliderRef} className="slider-track">
                        {servicesDB.map((s, i) => (
                            <div key={i} className="card">
                                <img src={s.photoPath} alt={s.name} />
                                <h3>{s.name}</h3>
                                <p className="desc">{s.shortDescription}</p>

                                <div className="meta">
                                    <span>{s.duration}</span>
                                    <span className="price">{s.price}</span>
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

export default Services;