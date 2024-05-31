import React from "react";
import { motion } from "framer-motion";
import { SiLivewire } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import "./styles/Project.css";

const project = [
    {
        title: "Property Provision Portal with MERN Stack",
        desc: "This project proposes an website to rent or sale the home or land property, It comes under mern stack. It helps to people to buy or sell the property through an online.",
        live: "https://property-provision.onrender.com/",
        hub: "https://github.com/SOLOMON-03/MERN-STACK.git",
        date: "10/2023 - 01/2024",
        delay: 0.2,
    },
    {
        title: "Movie rental using MySQL database in Java",
        desc: "This project proposes a console programming, this project stores the details of movies in database and get the details from customer Get the movie name from customer then search in database that is available in stock or not and if its available sell it to the customer or say no availability of the movie",
        live: "",
        hub: "https://github.com/SOLOMON-03/MOVIERENTAL-USING-DATABASE.git",
        date: "06/2023 - 08/2023",
        delay: 0.4,
    },
    {
        title: "Audio and Text Transmission Using Li-Fi",
        desc: "This project proposes an indoor navigation system for visually challenged people using Li-Fi. This system is based on audio transmission where it can be used to change the environment for visually challenged people. It operates on the principle of converting audio signal to electrical signal.",
        live: "",
        hub: "",
        date: "06/2021 - 05/2022",
        delay: 0.6,
    },
];

function Project() {
    return (
        <div className="project">
            <div className="project-container">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        bounce: 0.5,
                        type: "spring",
                        delay:0.2
                    }}
                    className="project-sub-title"
                >
                    My Projects
                </motion.h1>
                <motion.div className="project-list">
                    {project.map((data, index) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    bounce: 0.5,
                                    type: "spring",
                                    delay: data.delay,
                                }}
                                key={index}
                                className="tiltcard"
                            >
                                <div className="project-layer">
                                    <h3>{data.title}</h3>
                                    <p>{data.desc}</p>
                                    <div className="link-a">
                                        {data.hub && (
                                            <a className="github" href={data.hub}>
                                                <FaGithub />
                                            </a>
                                        )}
                                        {data.live && (
                                            <a className="live" href={data.live}>
                                                <SiLivewire />
                                            </a>
                                        )}
                                    </div>
                                    <p className="date-p">{data.date}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}

export default Project;
