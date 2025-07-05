// import React from 'react'
// import "./workexp.css"

// const workexp = () => {
//   return (
//     <>
//       <div className='work'>
//         <div className='container work-exp'>
//           <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
//           WORK EXPERIENCE
//         </h2>
//         <hr />

//         </div>

//       </div>
//     </>
//   )
// }

// export default workexp


import React from "react";
import { SiReact } from "react-icons/si";
import "./workexp.css";

const workExperience = [
  {
    title: "Full Stack Developer",
    company: "xyz, pvt ltd",
    date: "2023 - Present",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    title: "Full Stack Developer",
    company: "xyz, pvt ltd",
    date: "2020 - 2022",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    title: "Full Stack Developer",
    company: "xyz, pvt ltd",
    date: "2018 - 2020",
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
];

const WorkExp = () => {
  return (
    <div className="work" id="Work-experience">
      <div className="container work-exp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work Experience
        </h2>
        <hr />
        <div className="custom-timeline">
          {workExperience.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon">
                <SiReact size={24} color="#fff" />
              </div>
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3 className="vertical-timeline-element-title">
                  {item.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {item.company}
                </h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
