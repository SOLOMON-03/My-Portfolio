import React, { useState } from 'react'
import './styles/Header.css'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

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

    const headerAnimate = (delay) =>{
        return ({
        offscreen:{
            y:-20,
            opacity:0
        },
        onscreen:{
            y:0,
            opacity:1,
            transition:{
                duration:0.6,
                type:"spring",
                bounce:0.4,
                delay:delay
            }
        }
    })

    }

    return (
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{once:true}} className={ fix ? 'header-view fixed' : 'header-view'}>
            <motion.div variants={headerAnimate(0.2)} className='header-logo'>
                <h1 className='header-h1-logo'><Link to="home" spy={true} smooth={true} offset={-100} duration={900}>Portfolio</Link></h1>
            </motion.div>
            <div className='header-page'>
                <motion.ul className='header-ul-page'>
                    <motion.li variants={headerAnimate(0.4)}><Link to="home" spy={true} smooth={true} offset={-100} duration={900} className="header-li-nav">Home</Link></motion.li>
                    <motion.li variants={headerAnimate(0.5)}><Link to="contact" spy={true} smooth={true} offset={-100} duration={900} className="header-li-nav">Contact</Link></motion.li>
                    <motion.li variants={headerAnimate(0.6)}><Link to="about" spy={true} smooth={true} offset={-100} duration={900} className="header-li-nav">About</Link></motion.li>
                </motion.ul>
            </div>
            <div className='header-link'>
                <motion.ul className='header-ul-link'>
                    <motion.li variants={headerAnimate(0.7)}><a href='https://github.com/SOLOMON-03'>GitHub</a></motion.li>
                    <motion.li variants={headerAnimate(0.8)}><a href='https://www.linkedin.com/in/solomon-a-69396b306/'>LinkedIn</a></motion.li>
                    <motion.li variants={headerAnimate(0.9)}><a href='https://leetcode.com/Solomon_A/'>LeetCode</a></motion.li>
                    <motion.li variants={headerAnimate(1)}><a href='https://www.instagram.com/solomon.a__/'>Instagram</a></motion.li>
                </motion.ul>
            </div>
        </motion.div>
    )
}

export default Header