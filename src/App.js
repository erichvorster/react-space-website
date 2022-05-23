import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import logo from "../src/assets/NASA_logo.svg"

function App() {
  return (
    <div className="App">
      <Router>

        <nav className="bg-black text-white h-20 px-10 flex justify-between items-center ">
          <div>
            <img src={logo} className="h-12" />
          </div>
          <div>
            <Link to="/" className="mr-10"> Home </Link>
            <Link to="/about" className="mr-10"> About </Link>
            <Link to="/contact" className="mr-10"> Contact </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
