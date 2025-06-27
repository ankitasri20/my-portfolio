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
    </>
  );
}

export default App;
