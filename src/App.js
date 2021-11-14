import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import "./css/global.css";

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route exact path="/Blog" element={<Home />} />
        <Route path="/Blog/about" element={<About />} />
        <Route path="/Blog/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
