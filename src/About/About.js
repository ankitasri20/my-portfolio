import React from "react";
import profile from "../Assets/profile_img.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={profile} alt="ankita" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              I'm Ankita Kumari, a passionate software developer with a B.Tech
              in Computer Science and Engineering from Bharati Vidyapeeth (DU),
              Mumbai. I love building dynamic, user-friendly web interfaces
              using modern technologies like HTML, CSS, JavaScript, and React.
            </p>
            <p>
              With hands-on experience as a Software Developer Intern, I've
              developed and deployed several full-stack projects — from RESTful
              APIs with Flask to Android apps and Machine Learning models using
              Python.
            </p>
            <p>
              I enjoy solving real-world problems through code, especially in
              areas like system automation, user experience, and AI integration.
              My technical toolkit includes Python, Java, Flask, SQL, Git, and
              tools like Postman and NLTK.
            </p>
            <p>
              I’m also active on platforms like Codeforces and CodeChef,
              continuously honing my problem-solving and programming skills.
              Whether it's building clean UI, architecting APIs, or training ML
              models, I strive for elegant and efficient solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
