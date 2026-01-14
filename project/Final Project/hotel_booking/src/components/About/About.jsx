import React from "react";
// import aboutCSS from'./About/About.module.css';



export default function About() {

    return (
        <div className="section ">

            <div className="img-wrapper">
                <div className="img-left"></div>
                    <div className="img-right"></div>
                     <div className="img"></div>
                <img src="/photo_2026-01-13_12-13-34.jpg" alt="about-img" />
             
                
            </div>

            <div className="about-content">
                <small className="section-head">The Ethiopian Luxury Hotel</small>
                <h2 className="section-title">Where Elegance Meets <span>Excellance</span></h2>
                <p className="section-p">Our luxury hotel redefines elegance in Ethiopia, offering premium accommodations, exceptional dining, and unparalleled service. Designed for discerning travelers, we create memorable stays rooted in comfort, culture, and excellence.</p>
                <div className="cards">
                    <p>260+ <span> Awards Wins </span></p>
                    <p>250k+ <span> Visitors Vists </span></p>
                    <p>150k+ <span> Events </span></p>
                </div>
            </div>
        </div>
    )
}