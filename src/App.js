import About from "./About/About.js";
import Layout from "./components/Layout";
import Project from "./Project/Project.js";
import Techstack from "./Techstack/Techstack.js";


function App() {
  return (
    <>
      <Layout/>
      <div className="container">
        <About/>
        <Techstack/>
        {/* <Project/> */}
      </div>
    </>
  );
}

export default App;
