import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import logo from "../src/assets/space-shuttle.png"


function App() {
  return (
    <div className="App">
      <Router>

        <nav className="navbar text-white h-36 px-10 flex justify-between items-center ">
          <div>
            <img src={logo} className="h-12" />
          </div>
          <div>
            <Link to="/" className="mx-10 font-medium hover:text-purple uppercase text-xs tracking-widest transition-all ease-in-out duration-300"> Home </Link>
            <Link to="/about" className="mx-10 font-medium hover:text-purple uppercase text-xs tracking-widest transition-all ease-in-out duration-300"> About </Link>
            <Link to="/contact" className="mx-10 font-medium hover:text-purple uppercase text-xs tracking-widest transition-all ease-in-out duration-300"> Contact </Link>
            <Link to="/space" className="mx-10 font-medium hover:text-purple uppercase text-xs tracking-widest transition-all ease-in-out duration-300"> Space </Link>
          </div>
          <div></div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/space" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
