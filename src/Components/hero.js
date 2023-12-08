import React from 'react'
import Banner from "../Assets/banner.png"
const Hero = () => {
    return (
        <>
            <div className="hero">
                <img src={Banner} alt="banner" className="banner" />
                <h2>Computer Engineering</h2>
                <p>142,765 Computer Engineers follow this</p>
            </div>
        </>
    )
}

export default Hero;