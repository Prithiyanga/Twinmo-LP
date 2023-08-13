import React from "react";
import "./Landing_Page.css";
import Logo from "./Logo.png";
import { BsTwitter , BsLinkedin , BsGithub, } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";


const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img className="logo-footer" src={Logo} alt="Twinmo Logo"/>
            </div>
            <div className="contact">
                <BsTwitter className="contact-icon"/>
                <BsLinkedin className="contact-icon"/>
                <BsGithub className="contact-icon"/>
                <AiTwotoneMail className="contact-icon"/>
            </div>
            
        </div>
    )
}

export default Footer;