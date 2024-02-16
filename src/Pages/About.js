import React, { useState } from "react";
import "./About.css";
import img4 from '../Assets/image.png';

function About() {
    const [openTab, setOpenTab] = useState(1);
    const toggleTab = (index)=>{
        setOpenTab(index);
    }
    return (
        <>
            <div className="about-me-container" id="about">
                <div className="about-me-row">
                    <div className="about-me-left">
                        <h1 className="about-me-title">About Me</h1>
                        <p className="about-me-p">
                        I am a highly motivated individual with a strong educational background and a passion for continuous learning. 
                        Holding a Bachelor of Engineering from Karpagam college of Engineering, I have honed my skills in MERN stack and 
                        developed a web Application. My academic journey has equipped me with a keen 
                        analytical mindset and a thirst for knowledge. I am particularly drawn to an Developer and 
                        aspire to contribute my expertise to innovative projects. With a genuine interest in Fullstack developer, I am 
                        excited about the prospect of combining my academic knowledge with practical applications in a professional setting.
                        </p>
                        <div className="about-me-tab">
                            <p className={openTab === 1? "about-me-links about-me-active" : "about-me-links"} onClick={()=>toggleTab(1)}>Education</p>
                            <p className={openTab === 2? "about-me-links about-me-active" : "about-me-links"} onClick={()=>toggleTab(2)}>Skills</p>
                            <p className={openTab === 3? "about-me-links about-me-active" : "about-me-links"} onClick={()=>toggleTab(3)}>Certification</p>
                            <p className={openTab === 4? "about-me-links about-me-active" : "about-me-links"} onClick={()=>toggleTab(4)}>Achievement</p>
                        </div>
                        <div className="about-me-content-tab">
                        <div className={openTab === 1? "about-me-content about-me-active-content" : "about-me-content"} >
                            <ul>
                                <li><span>Bachelor of Computer Science Engineering</span><br/>Karpagam College of Engineering - 7.71 CGPA<br/>08/2022 - Present</li>
                                <li><span>Diploma in Electrical and Electronics Engineering</span><br/>PSG Polytechnic College - 81.1%<br/>06/2018 - 06/2022</li>
                            </ul>
                        </div>
                        <div className={openTab === 2? "about-me-content about-me-active-content" : "about-me-content"} >
                            <ul>
                                <li><span>Java</span></li>
                                <li><span>Python</span></li>
                                <li><span>MERN Stack</span></li>
                                <li><span>HTML</span></li>
                                <li><span>CSS</span></li>
                                <li><span>Tailwind CSS</span></li>
                            </ul>
                        </div>
                        <div className={openTab === 3? "about-me-content about-me-active-content" : "about-me-content"} >      
                            <ul>
                                <li><span>Completion of "React, Node Js, Express and MongoDB - The Fullstack" in Udemy(01/2024 - 02/2024)</span></li>
                                <li><span>InternShip on "Python at GateWay Software Solution" (06/2023 - 07/2023)</span></li>
                                <li><span>Participated in "09th Annual ISTE TamilNadu Section Polytechnic Student's Convention of Project Contest" (04/2022 - 04/2022)</span></li>
                                <li><span>Attended the "Entrepreneurship Awareness Camp Department of Science and Technology, Government of India, New Delhi" (12/2021 - 12/2021)</span></li>
                                <li><span> Participated in "PSG Tech Mini Marathon" (03/2020 - 03/2020)</span></li>
                            </ul>
                        </div>
                        <div className={openTab === 4? "about-me-content about-me-active-content" : "about-me-content"} >
                            <ul>
                                <li><span>Participated in "TCS CODEVITA Season 11 upto round 2 and got ranked at 1137th place" (10/2023 - 01/2024)</span></li>
                                <li><span>Secured third rank in III semester in PSG Polytechnic college (06/2019 - 0e/2020)</span></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="about-me-right">
                        <div className="about-me-img-right">
                            <img src={img4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
