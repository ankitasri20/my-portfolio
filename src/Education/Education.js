// import React from "react";
// import { MdSchool } from "react-icons/md";
// import "./Education.css";

// const Education = () => {
//   return (
//     <div className="education">
//       <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
//         TOP RECENT PROJECTS
//       </h2>
//       <hr />

//       <div className="vertical-timeline">
//         <div className="vertical-timeline-element">
//           <div className="vertical-timeline-element-icon">
//             <MdSchool size={24} />
//           </div>
//           <div className="vertical-timeline-element-content">
//             <h3 className="vertical-timeline-element-title">Creative Director</h3>
//             <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//             <p>
//               Creative Direction, User Experience, Visual Design, Project Management, Team Leading
//             </p>
//             <span className="vertical-timeline-element-date">2011 - Present</span>
//           </div>
//         </div>
//         {/* Add more vertical-timeline-element blocks here */}
//         <div className="vertical-timeline">
//         <div className="vertical-timeline-element">
//           <div className="vertical-timeline-element-icon">
//             <MdSchool size={24} />
//           </div>
//           <div className="vertical-timeline-element-content">
//             <h3 className="vertical-timeline-element-title">Creative Director</h3>
//             <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//             <p>
//               Creative Direction, User Experience, Visual Design, Project Management, Team Leading
//             </p>
//             <span className="vertical-timeline-element-date">2011 - Present</span>
//           </div>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Education;



// import React from "react";
// import { MdSchool } from "react-icons/md";
// import "./Education.css";

// const educationData = [
//   {
//     degree: "MCA",
//     institution: "IIT Mumbai, IN",
//     date: "2020 - 2022",
//   },
//   {
//     degree: "BCA",
//     institution: "IIT Mumbai, IN",
//     date: "2017 - 2020",
//   },
// ];

// const Education = () => {
//   return (
//     <div className="education" id="education">
//       <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
//         Education Details
//       </h2>
//       <hr />

//       <div className="custom-timeline">
//         {educationData.map((item, index) => (
//           <div key={index} className="timeline-item">
//             <div className="timeline-icon">
//               <MdSchool size={24} color="white" />
//             </div>
//             <div className="timeline-content">
//               <span className="timeline-date">{item.date}</span>
//               <h3>{item.degree}</h3>
//               <h4>{item.institution}</h4>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Education;

import React from "react";
import { MdSchool } from "react-icons/md";
import "./Education.css";

const educationData = [
  {
    degree: "MCA",
    institution: "IIT Mumbai, IN",
    date: "2020 - 2022",
    side: "left",
  },
  {
    degree: "BCA",
    institution: "IIT Mumbai, IN",
    date: "2017 - 2020",
    side: "right",
  },
];

const Education = () => {
  return (
    <div className="education-section" id="Education">
      <h2 className="section-title">EDUCATION DETAILS</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className={`timeline-container ${item.side}`}>
            <div className="timeline-content">
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
            </div>
            <div className="timeline-icon">
              <MdSchool size={24} />
              <span className="timeline-date">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
