import { Routes, Route } from "react-router-dom";


// Pages
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About_me";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>

        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
