import React from "react";
import Typewriter from "typewriter-effect";
import "../pages/home.css";
import { Link } from "react-router-dom";
import Resume from "../Assets/Ankita.pdf";

const home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
          <h2>Hi 👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["Forentend Developer !", "React Developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
            <div className="home-buttons">
            <div className="button-row">
              <a
                href="https://www.linkedin.com/in/ankita-kumari-023609249/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://github.com/ankitasri20"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a href="mailto:vermaankita0420@gmail.com" className="gmail">
                <i className="bx bxl-gmail"></i>
              </a>
              <a className="btn btn-cv" href={Resume} download="Ankita.pdf">
                My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
