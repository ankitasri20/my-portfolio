// import React from "react";
// import "./Menus.css";
// import profile from "../../Assets/profile_img.jpg";
// import { IoHome } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import {
//   FcAbout,
//   FcBiotech,
//   FcBusinessContact,
//   FcReading,
//   FcVideoProjector,
//   FcVoicePresentation,
// } from "react-icons/fc";
// import { FcHome } from "react-icons/fc";
// import { FcBusinessman } from "react-icons/fc";

// const Menus = ({ toggle }) => {
//   return (
//     <>
//       {toggle ? (
//         <>
//           <div className="navbar-profile-pic">
//             <img src={profile} alt="profile pic" />
//           </div>
//           <div className="nav-items">
//             <div className="nav-item">
//               {/* <div className="nav-link">
//                 <FcHome />
//                 Home
//               </div> */}
//               <Link to="/" className="nav-link">
//                 <FcHome />
//                 Home
//               </Link>

//               <Link to="/about" className="nav-link">
//                 <FcAbout />
//                 About
//               </Link>

//               <Link to="/experience" className="nav-link">
//                 <FcBusinessman />
//                 Work experience
//               </Link>

//               <Link to="/techstack" className="nav-link">
//                 <FcBiotech />
//                 Tech Stack
//               </Link>

//               <Link to="/education" className="nav-link">
//                 <FcReading />
//                 Education
//               </Link>

//               <Link to="/projects" className="nav-link">
//                 <FcVideoProjector />
//                 Projects
//               </Link>

//               <Link to="/testimonial" className="nav-link">
//                 <FcVoicePresentation />
//                 Testimonial
//               </Link>

//               <Link to="/contact" className="nav-link">
//                 <FcBusinessContact />
//                 Contact
//               </Link>
//             </div>

  
//           </div>
//         </>
//       ) : (
//         <>
//            <div className="nav-items">
//             <div className="nav-item">
//               <Link to="/" className="nav-link">
//                 <FcHome title="Home" />
//               </Link>

//               <Link to="/about" className="nav-link">
//                 <FcAbout title="About" />
//               </Link>

//               <Link to="/experience" className="nav-link">
//                 <FcBusinessman title="Work Experience" />
//               </Link>

//               <Link to="/techstack" className="nav-link">
//                 <FcBiotech title="Tech Stack" />
//               </Link>

//               <Link to="/education" className="nav-link">
//                 <FcReading title="Education" />
//               </Link>

//               <Link to="/projects" className="nav-link">
//                 <FcVideoProjector title="Projects" />
//               </Link>

//               <Link to="/testimonial" className="nav-link">
//                 <FcVoicePresentation title="Testimonial" />
//               </Link>

//               <Link to="/contact" className="nav-link">
//                 <FcBusinessContact title="Contact" />
//               </Link>
//             </div>
//           </div> 
//         </>
//       )}
//     </>
//   );
// };

// export default Menus;

import React from "react";
import "./Menus.css";
import { Link } from "react-scroll";
import profile from "../../Assets/profile_img.jpg";
import { IoHome } from "react-icons/io5";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcReading,
  FcVideoProjector,
  FcVoicePresentation,
} from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={profile} alt="profile pic" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                <FcHome />
                Home
                </Link>
                
              </div>

              <div className="nav-link">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                <FcAbout />
                 About
                </Link>
               
              </div>

              <div className="nav-link">
                <Link to="Work-experience" spy={true} smooth={true} offset={-100} duration={100}>
                <FcBusinessman />
                 Work experience
                </Link>
              </div>

              <div className="nav-link">
                <Link to="tech-stack" spy={true} smooth={true} offset={-100} duration={100}>
                <FcBiotech />
                 Tech Stack
                </Link>
                
                
              </div>

              <div className="nav-link">
                <Link to="Education" spy={true} smooth={true} offset={-100} duration={100}>
                <FcReading />
                 Education
                </Link>
                
            
              </div>

              <div className="nav-link">
                <Link to="Projects" spy={true} smooth={true} offset={-100} duration={100}>
                <FcVideoProjector />
                Projects
                </Link>
                
                
              </div>

              <div className="nav-link">
                <Link to="Testimonoal" spy={true} smooth={true} offset={-100} duration={100}>
                <FcVoicePresentation />
                 Testimonoal
                </Link>

                
                
              </div>

              <div className="nav-link">
                <Link to="Contact" spy={true} smooth={true} offset={-100} duration={100}>
                <FcBusinessContact />
                 Contact
                </Link>
                
                
              </div>
            </div>

  
          </div>
        </>
      ) : (
        <>
           <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                 <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                <FcHome />
                
                </Link>
              </div>

              <div className="nav-link">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                <FcAbout />
                </Link>
              </div>

              <div className="nav-link">
                <Link to="Work-experience" spy={true} smooth={true} offset={-100} duration={100}>
                <FcBusinessman />
                </Link>
              </div>

              <div className="nav-link">
                <Link to="tech-stack" spy={true} smooth={true} offset={-100} duration={100}>
                <FcBiotech />
                </Link>
              </div>

              <div className="nav-link">
                <Link to="Education" spy={true} smooth={true} offset={-100} duration={100}>
                <FcReading />
                </Link>
              </div>

              <div className="nav-link">
                <Link to="Projects" spy={true} smooth={true} offset={-100} duration={100}>
                <FcVideoProjector />
                </Link>
              </div>

              <div className="nav-link">
               <Link to="Testimonoal" spy={true} smooth={true} offset={-100} duration={100}>
                <FcVoicePresentation />
                </Link>

              </div>

              <div className="nav-link">
                <Link to="Contact" spy={true} smooth={true} offset={-100} duration={100}>
                <FcBusinessContact />
                </Link>
              </div>
            </div>
          </div> 
        </>
      )}
    </>
  );
};

export default Menus;
