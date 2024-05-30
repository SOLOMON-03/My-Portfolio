import React, { useRef, useState } from "react";
import "./styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import icon1 from "../Assets/linkedin.ico";
import icon2 from "../Assets/github.ico";
import icon3 from "../Assets/leetcode.ico";
import icon4 from "../Assets/instagram.ico";
import { motion } from "framer-motion";

function Contact() {
  const [Done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setDone(false);
    emailjs
      .sendForm("service_ped7p39", "template_1hmcqeg", form.current, {
        publicKey: "DU1eh18ZiQy0EWPgN",
      })
      .then(
        () => {
          setDone(true);
        },
        (error) => {
          setDone(false);
        }
      );
  };

  const social = [
    {
      icon: icon1,
      link: "https://www.linkedin.com/in/solomon-a-69396b306/",
      delay: 1.2,
    },
    {
      icon: icon2,
      link: "https://github.com/SOLOMON-03",
      delay: 1.4,
    },
    {
      icon: icon3,
      link: "https://leetcode.com/Solomon_A/",
      delay: 1.6,
    },
    {
      icon: icon4,
      link: "https://www.instagram.com/solomon.a__/",
      delay: 1.8,
    },
  ];

  return (
    <div id="contact" className="contact-details">
      <div className="content-h1">
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            bounce: 0.5,
            type: "spring",
          }}
          className="contact-h1"
        >
          Contact Me
        </motion.h1>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-box">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                bounce: 0.5,
                type: "spring",
                delay: 0.2,
              }}
              className="contact-icon"
            >
              <FontAwesomeIcon icon={faLocationDot} />
            </motion.div>
            <div className="contact-text">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  bounce: 0.5,
                  type: "spring",
                  delay: 0.3,
                }}
              >
                Address
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  bounce: 0.5,
                  type: "spring",
                  delay: 0.5,
                }}
              >
                4/258 D, Bharathi Nagar,
                <br />
                N.G.O Colony, Sattur,
                <br />
                Tamilnadu, India.
              </motion.p>
            </div>
          </div>
          <div className="contact-box">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                bounce: 0.5,
                type: "spring",
                delay: 0.6,
              }}
              className="contact-icon"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </motion.div>
            <div className="contact-text">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  bounce: 0.5,
                  type: "spring",
                  delay: 0.8,
                }}
              >
                Email
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  bounce: 0.5,
                  type: "spring",
                  delay: 1,
                }}
              >
                solomon172003@gmail.com
              </motion.p>
            </div>
          </div>
          <div className="contact-box">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                bounce: 0.5,
                type: "spring",
                delay: 1.1,
              }}
              className="contact-icon"
            >
              <FontAwesomeIcon icon={faPhone} />
            </motion.div>
            <div className="contact-text">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  bounce: 0.5,
                  type: "spring",
                  delay: 1.2,
                }}
              >
                Phone
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  bounce: 0.5,
                  type: "spring",
                  delay: 1.4,
                }}
              >
                +91 9360849334
              </motion.p>
            </div>
          </div>
          <div className="flex gap-3">
            {social.map((data, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: data.delay,
                  }}
                  className="contact-box"
                >
                  <div className="contact-id-icon">
                    <a href={data.link}>
                      <motion.img src={data.icon} alt="" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            type: "spring",
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="contact-personal"
        >
          <form ref={form} onSubmit={sendEmail}>
            <h2>Send Message</h2>
            <div className="contact-input">
              <input type="text" name="from_name" required />
              <span>FullName</span>
            </div>
            <div className="contact-input">
              <input type="text" name="from_email" required />
              <span>Email</span>
            </div>
            <div className="contact-input">
              <textarea name="message" required />
              <span>Type your Message...</span>
            </div>
            <div className="contact-input">
              <motion.input
              whileHover={{
                  scale: 1.05
              }}
                whileTap={{
                  scale: 0.85,
                  rotate: "3deg",
                }}
                transition={{
                  duration: 0.1,
                  ease: "easeInOut",
                }}
                type="submit"
                value="send"
                className="button"
              />
            </div>
            {Done && (
              <div className="contact-success">
                <p className="contact-p">Email Sent Successfully</p>
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
