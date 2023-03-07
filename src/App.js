import {Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Notebooks from "./Pages/Notebooks";
import Skills from './Pages/Skills';
import Projects from "./Pages/Projects";
import Contact from './Pages/Contact';
import ContentNotebook from "./Components/ContentNotebook";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/notebooks" element={<Notebooks />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/content" element={<ContentNotebook />} />
      </Routes>
    </div>
  );
}

export default App;
