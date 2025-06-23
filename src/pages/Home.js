import React from "react";
import Typewriter from "typewriter-effect";
import "../pages/home.css";
import Resume from "../Assets/Ankita.pdf";

const home = () => {
  return (
    <>
      <div className="container-fluid home-container">
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
            <button className="btn btn-hire">Hire Me</button>
            <a className="btn btn-cv" href={Resume} download="Ankita.pdf">My Resume</a>

          </div>
        </div>
      </div>
    </>
  );
};

export default home;
