import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import { toast , ToastContainer  } from "react-toastify";
import { DiGoogleCloudPlatform } from "react-icons/di";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please fill in all fields.");
        return;
    }

    toast.success("Form submitted successfully!");

    const res = await axios.post('')
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="container Contact" id="Contact">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">CONTACT</h2>
      <hr />
      <section className="contact-section" id="contact">
        <div className="contact-container">
          {/* Left Column */}
          <div className="contact-info">
            <div className="contact-intro">
              <h2 className="contact-title">LET'S CONNECT!</h2>
              <p className="contact-desc">
                Reach out to discuss opportunities, projects, or simply to start a conversation.
              </p>
            </div>

            {/* Social Icons */}
            <div className="info-block">
              <div className="info-item">
                <div className="social-media">
                  <a href="https://www.linkedin.com/in/ankita-kumari-023609249/" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  <a href="https://github.com/ankitasri20" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-github"></i>
                  </a>
                  <a href="mailto:vermaankita0420@gmail.com">
                    <i className="bx bxl-gmail"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form">
            <h3>FILL OUT THE FORM BELOW TO GET IN TOUCH:</h3>
            <form onSubmit={handlesubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="mb-3"
                value={name}
                onChange={(e) => setname(e.target.value)}
                
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                className="mb-3"
                value={email}
                onChange={(e) => setemail(e.target.value)}
               
              />
              <textarea
                placeholder="Type your message here!"
                rows="6"
                name="msg"
                value={msg}
                onChange={(e) => setmsg(e.target.value)}
                
              />
              <button type="submit" className="send-btn">
                SEND MESSAAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;