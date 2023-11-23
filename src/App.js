import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Form from "./Components/Form";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
