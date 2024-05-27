import React from "react";
import "./styles/Home.css";
import image from "../Assets/IMG_20240213_104539.jpg";
import { motion } from "framer-motion";

const PDF_URL = "SOLOMON_A - RESUME.pdf";

const cardVariants = (time) => {
    return {
        offscreen: {
            x: 600,
            opacity: 0,
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 2.2,
                delay:time
            },
        },
    };
};
const cardVariantsimg = {
    offscreen: {
        y: -300,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 5,
        },
    },
};
function Home() {
    const downloadPdf = (url) => {
        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const blobUrl = window.URL.createObjectURL(new Blob([blob]));
                const fileName = url.split("/").pop();
                const aTag = document.createElement("a");
                aTag.href = blobUrl;
                aTag.setAttribute("download", fileName);
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();
            });
    };
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            exit="exit"
            viewport={{ once: true, amount: 1 }}
            className="home-view"
            id="home"
        >
            <div className="home-left">
                <div className="home-box"></div>
                <motion.img
                    variants={cardVariantsimg}
                    src={image}
                    className="home-img"
                    alt=""
                />
            </div>
            <div className="home-right">
                <motion.h1 variants={cardVariants(0.2)} className="home-h1-me">
                    Hi, I am Solomon
                </motion.h1>
                <motion.h5 variants={cardVariants(0.4)} className="home-h5-me">
                    FullStack Developer
                </motion.h5>
                <motion.p variants={cardVariants(0.6)} className="home-p-me">
                    Seeking a challenging position in a reputed organization where I can
                    learn new skills, expand my knowledge, and leverage my learning. To
                    get an opportunity where I can make the best of my potential and
                    contribute to the organization’s growth.
                </motion.p>
                <motion.button
                    variants={cardVariants(0.8)}
                    className="home-button"
                    onClick={() => downloadPdf(PDF_URL)}
                >
                    CV Download
                </motion.button>
            </div>
        </motion.div>
    );
}

export default Home;
