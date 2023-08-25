import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./containers/home/index.jsx";
import About from "./containers/about/index.jsx";
import Resume from "./containers/resume/index.jsx";
import Skills from "./containers/skills/index.jsx";
import Portfolio from "./containers/portfolio/index.jsx";
import Contact from "./containers/contact/index.jsx";
import Navbar from "./components/navBar/index.jsx";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particles from "./utils.js/particles.jsx";

function App() {
  const location = useLocation();
  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticlesJsInHomePage = location.pathname === "/";
  return (
    <div className="App">
      {/*particles js */}
      {renderParticlesJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/*navbar*/}
      <Navbar />
      {/*main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
