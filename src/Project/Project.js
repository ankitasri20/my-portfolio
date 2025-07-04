import React from "react";
import "./Project.css";
import image1 from "../Assets/online-grocery-store.jpg"
import image2 from "../Assets/images (4).jpeg"
import image3 from "../Assets/atm.jpg";
import image4 from "../Assets/heart-disease-prediction-3.png"
import image5 from "../Assets/telegram-chatbot-1.png"

const Project = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          here are my top recent project with live links and source code.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <div className="row gy-4" id="ads">
              <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={image1} alt="project" style={{ height: "250px", width: "100%", objectFit: "cover" }}  />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Flask</span>
                <span className="card-detail-badge">Flask-RESTful</span>
                <span className="card-detail-badge">Flask-SQLAlchemy</span>
                <span className="card-detail-badge">SQLite3</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Grocery Store App
                  </h5>
                </div>
                <a className="ad-btn" href="https://github.com/ankitasri20/Groceryapp">
                  View
                </a>
              </div>
            </div>
          </div>

                  
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Android App</span>
                <img src={image2} alt="project" style={{ height: "250px", width: "100%", objectFit: "cover" }}  />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Java</span>
                <span className="card-detail-badge">Android Studio</span>
                <span className="card-detail-badge">SQLite</span>
                {/* <span className="card-detail-badge">Mongodb</span> */}
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Skill Sync
                  </h5>
                </div>
                <a className="ad-btn" href="https://github.com/ankitasri20/SkillSync">
                  View
                </a>
              </div>
            </div>
          </div>
     


            <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Java</span>
                <img src={image3} alt="project" style={{ height: "250px", width: "100%", objectFit: "cover" }}   />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Java</span>
                <span className="card-detail-badge">Flask</span>
                <span className="card-detail-badge">Flask</span>
                {/* <span className="card-detail-badge">Mongodb</span> */}
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    ATM Management System
                  </h5>
                </div>
                <a className="ad-btn" href="https://github.com/ankitasri20/ATM-Management-system">
                  View
                </a>
              </div>
            </div>
          </div>


            <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">ML</span>
                <img src={image4} alt="project" style={{ height: "250px", width: "100%", objectFit: "cover" }} />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Sklearn</span>
                <span className="card-detail-badge">Flask</span>
                <span className="card-detail-badge">Pickle</span>
                <span className="card-detail-badge">ML</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Heart Disease Predictor
                  </h5>
                </div>
                <a className="ad-btn" href="https://github.com/ankitasri20/Heart-Disease-Prediction">
                  View
                </a>
              </div>
            </div>
          </div>


            <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Python</span>
                <img src={image5} alt="project" style={{ height: "250px", width: "100%", objectFit: "cover" }} />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Python</span>
                <span className="card-detail-badge">NLTK</span>
                {/* <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span> */}
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Telegram Bot
                  </h5>
                </div>
                <a className="ad-btn" href="https://github.com/ankitasri20/Telegram-bot">
                  View
                </a>
              </div>
            </div>
          </div>
          </div>

          {/* <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={image5} alt="project" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Techinofoyt Shopping Website
                  </h5>
                </div>
                <a className="ad-btn" herf="#">
                  View
                </a>
              </div>
            </div>
          </div> */}

        </div>
      </div>
          




          
    </>
  );
};

export default Project;
