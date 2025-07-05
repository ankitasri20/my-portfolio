import About from "./About/About.js";
import Layout from "./components/Layout";
import Contact from "./Contact/Contact.js";
import Education from "./Education/Education.js";
import Footer from "./Footer/Footer.js";
import Project from "./Project/Project.js";
import Techstack from "./Techstack/Techstack.js";
import Workexp from "./workexp/Workexp.js";
import Homee from "./pages/Homee.js"
import Resume from "./Resume/Resume.js"
import { BrowserRouter as  Routes, Route } from "react-router-dom";
import MobileNav from "./components/MobileNav/MobileNav.js";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
    <ToastContainer/>
    <MobileNav/>
      <Layout/>
      <div className="container">
        <About/> 
        {/* <Education/> */}
        <Techstack/> 
        <Project/>
        {/* <Workexp/> */}
        <Contact/>
      </div>
      <Footer/>

      {/* <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/About" element={<About />} />
        <Route path="/Layout" element={<Layout/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/experience" element={<Workexp/>} />
      </Routes> */}
    
    </>
  );
}

export default App;
