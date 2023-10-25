import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Hompage from "./pages/HomePage/Homepage";
import AboutMe from "./pages/AboutMe/AboutMe";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Sidebar from "./components/sidebar/Sidebar";
import DarkMode from "./components/darkmode/DarkMode";

function App() {
  return (
    <>
      <BrowserRouter>
        <DarkMode />
        <Routes>
          <Route path="/" element={<Hompage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Sidebar />
      </BrowserRouter>
    </>
  );
}

export default App;
