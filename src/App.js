import About from "./About/About.js";
import Layout from "./components/Layout";
import Contact from "./Contact/Contact.js";
import Education from "./Education/Education.js";
import Footer from "./Footer/Footer.js";
import Project from "./Project/Project.js";
import Techstack from "./Techstack/Techstack.js";
import Workexp from "./workexp/Workexp.js";


function App() {
  return (
    <>
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
      {/* <Router>
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/experience" element={<WorkExp />} />
      </Routes>
    </Router> */}
    </>
  );
}

export default App;
