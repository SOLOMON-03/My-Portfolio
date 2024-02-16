import React, { useRef, useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faEnvelope, faLocationDot,  faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser';

function Contact() {
  const [Done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setDone(false);
    emailjs
      .sendForm('service_ped7p39', 'template_1hmcqeg', form.current, {
        publicKey: 'DU1eh18ZiQy0EWPgN',
      })
      .then(
        () => {
          setDone(true);
        },
        (error) => {
          setDone(false);
        },
      );
  };
  return (
    <div id="contact" className="contact-details">
      <div className="content-h1">
        <h1 className="contact-h1">Contact Me</h1>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-box">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="contact-text">
              <h3>Address</h3>
              <p>4/258 D, Bharathi Nagar,<br/>N.G.O Colony, Sattur,<br/>Tamilnadu, India.</p>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="contact-text">
              <h3>Email</h3>
              <p>solomon172003@gmail.com</p>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faPhone}/>
            </div>
            <div className="contact-text">
              <h3>Phone</h3>
              <p>+91 9360849334</p>
            </div>
          </div>
        </div>
        <div className="contact-personal">
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
              <input type="submit" value="send" />
            </div>
            {Done && (
              <div className="contact-success">
                <p className="contact-p">Email Sent Successfully</p>
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
