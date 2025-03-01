import "./App.css";
import HeaderBar from "./Components/Header.jsx";
import Contact from "./Components/Contact.jsx";
import Skills from "./Components/Skills.jsx";
import About from "./Components/About.jsx";
import Home from "./Components/Home.jsx";
import Project from "./Components/Project.jsx";

function App() {
  return (
    <div className="App w-full h-full bg-black opacity-90">
      <HeaderBar />
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
