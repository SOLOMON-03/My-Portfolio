import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-scroll';

function Header() {
    const [fix, setFix] = useState(false);
    function setFixed(){
        if(window.scrollY >= 530){
            setFix(true)
        }
        else{
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed);
  return (
    <div className={ fix ? 'header-view fixed' : 'header-view'}>
        <div className='header-logo'>
            <h1 className='header-h1-logo'><Link to="home" spy={true} smooth={true} offset={-100} duration={900}>Portfolio</Link></h1>
        </div>
        <div className='header-page'>
            <ul className='header-ul-page'>
                <li><Link to="home" spy={true} smooth={true} offset={-100} duration={900} className="header-li-nav">Home</Link></li>
                <li><Link to="contact" spy={true} smooth={true} offset={-100} duration={900} className="header-li-nav">Contact</Link></li>
                <li><Link to="about" spy={true} smooth={true} offset={-100} duration={900} className="header-li-nav">About</Link></li>
            </ul>
        </div>
        <div className='header-link'>
            <ul className='header-ul-link'>
                <li><a href='https://github.com/SOLOMON-03'>GitHub</a></li>
                <li><a href='https://www.linkedin.com/in/solomon-a-009bb621a/'>LinkedIn</a></li>
                <li><a href='https://leetcode.com/Solomon_A/'>LeetCode</a></li>
                <li><a href='https://www.instagram.com/solomon.a__/'>Instagram</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header