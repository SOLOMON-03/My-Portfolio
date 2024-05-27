import React, { useState } from "react";
import "./styles/About.css";
import img4 from "../Assets/image.png";
import { motion } from "framer-motion";

function About() {
    const [openTab, setOpenTab] = useState(1);
    const toggleTab = (index) => {
        setOpenTab(index);
    };
    const leftAnimate = (time)=>{
        return({
        offscreen: {
            y: -30,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 2,
                type: "spring",
                bounce:0.2,
                delay:time
            },
        },
        })
    };
    const rightAnimate = ()=>{
        return({
        offscreen: {
            x: -300,
            opacity: 0,
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 2,
                bounce:0.2,
                type: "spring",
                delay:4
            },
        },
        })
    };
    
    function timing(time){
        return(
            {
            start:{
                x:100,
                opacity:0,
            },
            run:{
                x:0,
                opacity:1,
                transition:{
                    type:"spring",
                    bounce:0.5,
                    duration:1.2,
                    ease:"easeInOut",
                    delay:time
                }
            }
            }
        )
    }
    return (
        <>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 1 }}
                className="about-me-container"
                id="about"
            >
                <motion.div className="about-me-row">
                    <motion.div className="about-me-left">
                        <motion.h1 variants={leftAnimate(1)} className="about-me-title">
                            About Me
                        </motion.h1>
                        <motion.p className="about-me-p" variants={leftAnimate(2)}>
                            I am a highly motivated individual with a strong educational
                            background and a passion for continuous learning. Holding a
                            Bachelor of Engineering from Karpagam college of Engineering, I
                            have honed my skills in MERN stack and developed a web
                            Application. My academic journey has equipped me with a keen
                            analytical mindset and a thirst for knowledge. I am particularly
                            drawn to an Developer and aspire to contribute my expertise to
                            innovative projects. With a genuine interest in Fullstack
                            developer, I am excited about the prospect of combining my
                            academic knowledge with practical applications in a professional
                            setting.
                        </motion.p>
                        <motion.div variants={leftAnimate(3)} >
                            <motion.div
                                className="about-me-tab"
                            >
                                <motion.p
                                    whileTap={{ scale: 0.8 }}
                                    className={
                                        openTab === 1
                                            ? "about-me-links about-me-active"
                                            : "about-me-links"
                                    }
                                    onClick={() => toggleTab(1)}
                                >
                                    Education
                                </motion.p>
                                <motion.p
                                    whileTap={{ scale: 0.8 }}
                                    className={
                                        openTab === 2
                                            ? "about-me-links about-me-active"
                                            : "about-me-links"
                                    }
                                    onClick={() => toggleTab(2)}
                                >
                                    Skills
                                </motion.p>
                                <motion.p
                                    whileTap={{ scale: 0.8 }}
                                    className={
                                        openTab === 3
                                            ? "about-me-links about-me-active"
                                            : "about-me-links"
                                    }
                                    onClick={() => toggleTab(3)}
                                >
                                    Certification
                                </motion.p>
                                <motion.p
                                    whileTap={{ scale: 0.8 }}
                                    className={
                                        openTab === 4
                                            ? "about-me-links about-me-active"
                                            : "about-me-links"
                                    }
                                    onClick={() => toggleTab(4)}
                                >
                                    Achievement
                                </motion.p>
                            </motion.div>
                            <motion.div 
                                className="about-me-content-tab">
                                <motion.div
                                    initial="start"
                                    whileInView="run"
                                    className={
                                        openTab === 1
                                            ? "about-me-content about-me-active-content"
                                            : "about-me-content"
                                    }
                                >
                                    <ul>
                                        <motion.li
                                            variants={timing(0.2)}
                                        >
                                            <span>Bachelor of Computer Science Engineering</span>
                                            <br />
                                            Karpagam College of Engineering - 7.71 CGPA
                                            <br />
                                            08/2022 - Present
                                        </motion.li>
                                        <motion.li
                                            variants={timing(0.4)}
                                        >
                                            <span>
                                                Diploma in Electrical and Electronics Engineering
                                            </span>
                                            <br />
                                            PSG Polytechnic College - 81.1%
                                            <br />
                                            06/2018 - 06/2022
                                        </motion.li>
                                    </ul>
                                </motion.div>
                                <motion.div
                                    initial="start"
                                    whileInView="run"
                                    className={
                                        openTab === 2
                                            ? "about-me-content about-me-active-content"
                                            : "about-me-content"
                                    }
                                >
                                    <ul>
                                        <motion.li 
                                            variants={timing(0.2)}
                                        >
                                            <span>Java</span>
                                        </motion.li>
                                        <motion.li 
                                            variants={timing(0.4)}
                                        >
                                            <span>Python</span>
                                        </motion.li>
                                        <motion.li 
                                            variants={timing(0.6)}
                                        >
                                            <span>MERN Stack</span>
                                        </motion.li>
                                        <motion.li 
                                            variants={timing(0.8)}
                                        >
                                            <span>HTML</span>
                                        </motion.li>
                                        <motion.li 
                                            variants={timing(1)}
                                        >
                                            <span>CSS</span>
                                        </motion.li>
                                        <motion.li 
                                            variants={timing(1.2)}
                                        >
                                            <span>Tailwind CSS</span>
                                        </motion.li>
                                    </ul>
                                </motion.div>
                                <motion.div
                                    initial="start"
                                    whileInView="run"
                                    className={
                                        openTab === 3
                                            ? "about-me-content about-me-active-content"
                                            : "about-me-content"
                                    }
                                >
                                    <ul>
                                        <motion.li 
                                            variants={timing(0.2)}
                                        >
                                            <span>
                                                Completion of "React, Node Js, Express and MongoDB - The
                                                Fullstack" in Udemy(01/2024 - 02/2024)
                                            </span>
                                        </motion.li>
                                        <motion.li 
                                            variants={timing(0.4)}
                                        >
                                            <span>
                                                InternShip on "Python at GateWay Software Solution"
                                                (06/2023 - 07/2023)
                                            </span>
                                        </motion.li>
                                        <motion.li 
                                            variants={timing(0.6)}
                                        >
                                            <span>
                                                Participated in "09th Annual ISTE TamilNadu Section
                                                Polytechnic Student's Convention of Project Contest"
                                                (04/2022 - 04/2022)
                                            </span>
                                        </motion.li>
                                        <motion.li 
                                            variants={timing(0.8)}
                                        >
                                            <span>
                                                Attended the "Entrepreneurship Awareness Camp Department
                                                of Science and Technology, Government of India, New
                                                Delhi" (12/2021 - 12/2021)
                                            </span>
                                        </motion.li>
                                        <motion.li 
                                            variants={timing(1)}
                                        >
                                            <span>
                                                Participated in "PSG Tech Mini Marathon" (03/2020 -
                                                03/2020)
                                            </span>
                                        </motion.li>
                                    </ul>
                                </motion.div>
                                <motion.div
                                    initial="start"
                                    whileInView="run"
                                    className={
                                        openTab === 4
                                            ? "about-me-content about-me-active-content"
                                            : "about-me-content"
                                    }
                                >
                                    <ul>
                                        <motion.li
                                            variants={timing(0.2)}
                                        >
                                            <span>
                                                Participated in "TCS CODEVITA Season 11 upto round 2 and
                                                got ranked at 1137th place" (10/2023 - 01/2024)
                                            </span>
                                        </motion.li>
                                        <motion.li
                                            variants={timing(0.4)}
                                        >
                                            <span>
                                                Secured third rank in III semester in PSG Polytechnic
                                                college (06/2019 - 0e/2020)
                                            </span>
                                        </motion.li>
                                    </ul>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <div className="about-me-right">
                        <motion.div variants={rightAnimate()} whileInView={{delay:1}} className="about-me-img-right">
                            <img src={img4} alt="" />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}

export default About;
