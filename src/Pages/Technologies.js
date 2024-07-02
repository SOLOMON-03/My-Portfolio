import React from "react";
import img1 from "../Assets/html.png";
import img2 from "../Assets/js.png";
import img3 from "../Assets/java.png";
import img5 from "../Assets/nodejs.png";
import img6 from "../Assets/social.png";
import img7 from "../Assets/physics.png";
import img8 from "../Assets/tailwind-css.256x154.png";
import img9 from "../Assets/icons8-express-js-50.png";
import img10 from "../Assets/mongodb.png";
import img11 from "../Assets/figma.png";
import img12 from "../Assets/Spring.png";
import img13 from "../Assets/appwrite.png";
import { motion } from "framer-motion";

const tools = [
    {
        label: "Java",
        icon: img3,
        delay: (Math.random() * 2 + 1).toFixed(1),
        shadow: "hover:shadow-[0_10px_20px_rgba(21,_101,_192,_1)]",
        mobile: "max-md:shadow-[0_10px_20px_rgba(21,_101,_192,_1)]",
    },
    {
        label: "HTML",
        icon: img1,
        delay: (Math.random() * 2 + 1).toFixed(1),
        shadow: "hover:shadow-[0_10px_20px_rgba(255,_109,_0,_1)]",
        mobile: "max-md:shadow-[0_10px_20px_rgba(255,_109,_0,_1)]",
    },
    {
        label: "CSS",
        icon: img6,
        delay: (Math.random() * 2 + 1).toFixed(1),
        shadow: "hover:shadow-[0_10px_20px_rgba(53,_193,_241,_1)]",
        mobile: "max-md:shadow-[0_10px_20px_rgba(53,_193,_241,_1)]",
    },
    {
        label: "TailwindCSS",
        icon: img8,
        delay: (Math.random() * 2 + 1).toFixed(1),
        shadow: "hover:shadow-[0_10px_20px_rgba(11,_199,_184,_1)]",
        mobile: "max-md:shadow-[0_10px_20px_rgba(11,_199,_184,_1)]",
    },
    {
        label: "Javascript",
        icon: img2,
        delay: (Math.random() * 2 + 1).toFixed(1),
        shadow: "hover:shadow-[0_10px_20px_rgba(255,_214,_0,_1)]",
        mobile: "max-md:shadow-[0_10px_20px_rgba(255,_214,_0,_1)]",
    },
    {
        label: "React",
        icon: img7,
        delay: (Math.random() * 2 + 1).toFixed(1),
        shadow: "hover:shadow-[0_10px_20px_rgba(83,_193,_222,_1)]",
        mobile: "max-md:shadow-[0_10px_20px_rgba(83,_193,_222,_1)]",
    },
    {
        label: "Nodejs",
        icon: img5,
        delay: (Math.random() * 2 + 1).toFixed(1),
        shadow: "hover:shadow-[0_10px_20px_rgba(33,_163,_102,_1)]",
        mobile: "max-md:shadow-[0_10px_20px_rgba(33,_163,_102,_1)]",
    },
    {
        label: "MongoDB",
        icon: img10,
        delay: (Math.random() * 2 + 1).toFixed(1),
        shadow: "hover:shadow-[0_10px_20px_rgba(88,_170,_80,_1)]",
        mobile: "max-md:shadow-[0_10px_20px_rgba(88,_170,_80,_1)]",
    },
    {
        label: "Expressjs",
        icon: img9,
        delay: (Math.random() * 2 + 1).toFixed(1),
        shadow: "hover:shadow-[0_10px_20px_rgba(225,_225,_225,_225)]",
        mobile: "max-md:shadow-[0_10px_20px_rgba(225,_225,_225,_225)]",
    },
    {
        label: "Figma",
        icon: img11,
        delay: (Math.random() * 2 + 1).toFixed(1),
        shadow: "hover:shadow-[0_10px_20px_rgba(124,_77,_255,_1)]",
        mobile: "max-md:shadow-[0_10px_20px_rgba(124,_77,_255,_1)]",
    },
    {
        label: "Appwrite",
        icon: img13,
        delay: (Math.random() * 2 + 1).toFixed(1),
        shadow: "hover:shadow-[0_10px_20px_rgba(240,_46,_101,_1)]",
        mobile: "max-md:shadow-[0_10px_20px_rgba(240,_46,_101,_1)]",
    },
    {
        label: "Spring Boot",
        icon: img12,
        delay: (Math.random() * 2 + 1).toFixed(1),
        shadow: "hover:shadow-[0_10px_20px_rgba(119,_188,_31,_1)]",
        mobile: "max-md:shadow-[0_10px_20px_rgba(119,_188,_31,_1)]",
    },
];

const Technologies = () => {
    return (
        <motion.div className="flex justify-center items-center flex-col gap-10 ">
            <div>
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -50 }}
                    transition={{ duration: 2, delay: 0.2 }}
                    className="text-[2rem] text-[#f4f1de] font-semibold"
                >
                    Technologies
                </motion.h1>
            </div>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1.5, delay: 0.4 }}
                className="flex gap-2 flex-wrap justify-center py-10 "
            >
                {tools.map((data, index) => {
                    return (
                        <motion.div
                            variants={{
                                initial: {
                                    y: -10,
                                },
                                animate: {
                                    y: [10, -10],
                                    transition: {
                                        duration: data.delay,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                    },
                                },
                            }}
                            initial="initial"
                            animate="animate"
                            key={index}
                            className={`flex cursor-pointer border w-28 h-28 max-md:w-20 max-md:h-20 border-none rounded-lg justify-center 
                            items-center flex-col gap-2 mb-8 tech-skill ${data.shadow} ${data.mobile} text-[#ACC8E5]  hover:text-[#112A46] 
                            hover:bg-[#ACC8E5] transition-colors duration-500 ease-in-out `}
                        >
                            <motion.img
                                className="w-12 h-12 max-md:w-9 max-md:h-9 transition duration-500 ease-in-out hover:scale-[1.1] "
                                src={data.icon}
                                alt=""
                            />
                            <label className="max-md:text-[12px]">
                                {data.label}
                            </label>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
};

export default Technologies;
