import { Routes, Route, BrowserRouter } from "react-router-dom";
import Hero from "./Components/Hero";
import Form from "./Components/Form";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Nav from "./Components/Nav";
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
          <Route path="form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
