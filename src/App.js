import About from "./About/About.js";
import Layout from "./components/Layout";
import Education from "./Education/Education.js";
import Project from "./Project/Project.js";
import Techstack from "./Techstack/Techstack.js";


function App() {
  return (
    <>
      <Layout/>
      <div className="container">
        <About/>
        <Education/>
        <Techstack/>
        <Project/>

      </div>
    </>
  );
}

export default App;
