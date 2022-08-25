import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import NavbarHeader from "./Components/Navbarheader";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Developers from "./Components/Developers";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarHeader />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/contact" element={<Contact />} />

          {/* Insert Current Loaded Webpage here */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
