import React from "react";
import "./Contact.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="continer Contact" id="contact">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase ">
          CONTACT
        </h2>
    <hr/>
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Column */}
        <div className="contact-info">
          {/* TOP: Title + Description */}
          <div className="contact-intro">
            <h2 className="contact-title">LET'S CONNECT!</h2>
            <p className="contact-desc">
              Reach out to discuss opportunities, projects, or simply to start a
              conversation.
            </p>
          </div>

          {/* BOTTOM: Contact Icons */}
          <div className="info-block">
            <div className="info-item">
              {/* <FiPhone className="info-icon" /> */}
              <div className="social-media">
                <a
                  href="https://www.linkedin.com/in/ankita-kumari-023609249/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a
                  href="https://github.com/ankitasri20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-github"></i>
                </a>
                
                <a href="mailto:vermaankita0420@gmail.com">
                  <i className="bx bxl-gmail"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="contact-form">
          <h3>FILL OUT THE FORM BELOW TO GET IN TOUCH:</h3>
          <form>
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
            <textarea placeholder="Type your message here!" rows="6" required />
            <button type="submit" className="send-btn">
              SEND EMAIL
            </button>
          </form>
        </div>
      </div>

    </section>
    </div>
  );
};

export default Contact;
