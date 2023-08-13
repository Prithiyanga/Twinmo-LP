import React, { useState } from "react";
import "./Landing_Page.css";
import Logo from "./Logo.png"

const Navbar = () =>{

    var [colorChange , setColorChange] = useState(false)

    function changeNavbarColor(){
        if (window.scrollY >= 50) {
            setColorChange(true)
        }
        else {
            setColorChange(false)
        }   
    }

    window.addEventListener('scroll' , changeNavbarColor)  

    return(
        <div className={colorChange ? 'navbar colorChange' : 'navbar'}>
            <div>
                <img className="logo" src={Logo} alt="Twinmo Logo" />
            </div>
            <div className="nav-options">
                <div className="nav" href="http://www.learnytechnology.com/platforms">Platforms</div>
                <div className="nav" href="http://www.learnytechnology.com/use-cases">Use Cases</div>
                <div className="nav" href="http://www.learnytechnology.com/industries">Industries</div>
                <div className="nav" href="http://www.learnytechnology.com/services">Services</div>
                <div className="nav" href="http://www.learnytechnology.com/blog">Blog</div>
            </div>
        </div>
    )
}

export default Navbar;